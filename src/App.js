import { Segment, Card } from 'semantic-ui-react'

const App = () => {
  return (
      <Segment raised style={{display:'flex', minHeight: '100vh'}}>
        <Card
          style={{margin:'auto', textAlign:'center'}}
          href="https://rinqtf.vercel.app/apps/tolerance"
          header='Please use link to continue.'
          description='https://rinqtf.vercel.app/apps/tolerance'/>
      </Segment>
  )}

export default App
