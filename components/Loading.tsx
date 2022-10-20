import { CircularProgress } from '@mui/material'
import { PageSection } from './PageSection'

export const Loading = () => {
  return (
    <PageSection>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </div>
    </PageSection>
  )
}
