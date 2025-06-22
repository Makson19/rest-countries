import Template from '../components/template/Template'
import HomePage from '../pages/HomePage'

export const routes = [
  {
    path: '/',
    element: <Template />,
    children: [
      {
        path: '/',
        index: true,
        element: <HomePage />
      }
    ]
  }
]
