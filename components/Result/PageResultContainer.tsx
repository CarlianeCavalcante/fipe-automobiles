import { useFetchResult } from '@/hooks/automobiles'
import { useEffect } from 'react'
import { Loading } from '../Loading'
import { PageSection } from '@/components/PageSection'
import { BoxResult } from './BoxResult'
import { NotResultFound } from './NotResultFound'

import { makeStyles, createStyles } from '@material-ui/styles'

const useStyles: any = makeStyles(() =>
  createStyles({
    boxResult: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 15,
      backgroundColor: 'rgb(124,204,171, 0.3)',
      padding: '30px 200px',
    },
  })
)

export const PageResultContainer = () => {
  const { dataResult, fetchResult, loadingResult }: any = useFetchResult()

  useEffect(() => {
    fetchResult()
  }, [])

  if (loadingResult) return <Loading />

  return (
    <PageSection>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {dataResult ? (
          <BoxResult
            brand={dataResult['Marca']}
            model={dataResult['Modelo']}
            year={dataResult['AnoModelo']}
            value={dataResult['Valor']}
            useStyles={useStyles}
          />
        ) : (
          <NotResultFound />
        )}
      </div>
    </PageSection>
  )
}
