import flattenDeep from 'lodash/flattenDeep'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import React from 'react'

interface RouteConfig {
  path?: string
  component?: React.ComponentType
  routes?: RouteConfig[]
  layout?: React.ComponentType
  name?: string
}

const generateFlattenRoutes = (
  routes: RouteConfig[] | undefined
): RouteConfig[] => {
  if (!routes) return []
  return flattenDeep(
    routes.map(({ routes: subRoutes, ...rest }) => [
      rest,
      generateFlattenRoutes(subRoutes),
    ])
  )
}

export const renderRoutes = (mainRoutes: any) => {
  return ({ isAuthorized }: any) => {
    const layouts = mainRoutes.map(
      ({ layout: Layout, routes }: any, index: any) => {
        const subRoutes = generateFlattenRoutes(routes)
        return (
          <Route key={index} element={<Layout />}>
            {subRoutes.map(
              ({ component: Component, path, name, isPublic }: any) => {
                return (
                  <Route
                    key={name}
                    element={
                      <ProtectedRoute
                        isAuthorized={isAuthorized}
                        isPublic={isPublic}
                      />
                    }
                  >
                    {Component && path && (
                      <Route element={<Component />} path={path} />
                    )}
                  </Route>
                )
              }
            )}
          </Route>
        )
      }
    )
    return <ReactRoutes>{layouts}</ReactRoutes>
  }
}
