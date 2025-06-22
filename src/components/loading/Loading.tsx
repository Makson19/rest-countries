import { Box, CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles'

const LoadingContainer = styled(Box)(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  height: 'calc(100vh - 84.5px)',
}))

const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress
        variant='indeterminate'
        color='secondary'
        size={45}
      />
    </LoadingContainer>
  )
}

export default Loading
