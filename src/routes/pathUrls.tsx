import Template from '../components/template/Template'
import CountryInfoPage from '../pages/CountryInfoPage'
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
      },
      {
        path: '/:country',
        element: <CountryInfoPage />
      }
    ]
  }
]
