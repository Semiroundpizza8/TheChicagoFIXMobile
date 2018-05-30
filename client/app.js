import React from 'react'
import { DesktopContainer, MobileContainer, HomepageHeader } from './components'
import Routes from './routes'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Icon
} from 'semantic-ui-react'

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

let firstBackgroundStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: 'black',
  backgroundImage: 'url("assets/HeroTwo.jpg")',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: "35vh",
}

let secondBackgroundStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: 'black',
  backgroundImage: 'url("assets/HeroThree.jpg")',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: "35vh",
}

const App = () => {
  return (
    <div>
      <HomepageHeader />
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column floated='right' width={6}>
              <Image
                bordered
                circular
                size='medium'
                src='/assets/busInside.jpg'
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '3em' }}>We Bring the Best In Healthcare to you!</Header>
              <div style={{ fontSize: '1.5em' }}>
                <p><b>Offering an increase in...</b></p>
                <List>
                  <List.Item>
                    <Icon name='arrow up' />
                    Work Site Safety
                  </List.Item>
                  <List.Item>
                    <Icon name='arrow up' />
                    Employee Wellness
                  </List.Item>
                  <List.Item>
                    <Icon name='arrow up' />
                    Increase Productivity
                  </List.Item>
                  <List.Item>
                    <Icon name='arrow up' />
                    Open New Jobs
                  </List.Item>
                </List>
                <p><b>And a decrease in...</b></p>
                <List>
                  <List.Item>
                    <Icon name='down arrow' />
                    EMR
                  </List.Item>
                  <List.Item>
                    <Icon name='down arrow' />
                    OSHA Rales
                  </List.Item>
                  <List.Item>
                    <Icon name='down arrow' />
                    Work Comp Premiums
                  </List.Item>
                  <List.Item>
                    <Icon name='down arrow' />
                    Cost Work
                  </List.Item>
                </List>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <div id="header" style={firstBackgroundStyle} />

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
          <Grid.Row centered='true'>
            <Header as='h1' textAlign='center' style={{ fontSize: '3em', padding: '3.5vh' }}>We Specialize In</Header>
          </Grid.Row>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>Preventative Care</Header>
              <p style={{ fontSize: '1.33em' }}>We will teach your employees proper lifting and moving techniques in order to avoid the most common workplace injuries including low back pain, cervical strain, and repetitive injuries.</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>Immediate Injury Assessment</Header>
              <p style={{ fontSize: '1.33em' }}>We will be there to assess and treat on –site any musculoskeletal injuries that may be plaguing your employees. With us, your employees will avoid the long wait times of the emergency departments and walk-in clinics as well as avoiding unnecessary medical treatment.</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>Job Specific Strength/ Conditioning</Header>
              <p style={{ fontSize: '1.33em' }}>Our certified personal trainers will come out to your jobsites to lead your employees in a group stretch and warm sessions in order to prepare their bodies for an injury free work day. Our trainers will stay on site to advise your employees on appropriate fitness and diet routines to reach their goals in a healthy and sustainable manner.</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>Wellness Screenings</Header>
              <p style={{ fontSize: '1.33em' }}>We will come to your offices or jobsites and screen your employees’ vital signs, cholesterol levels, and blood glucose levels. Our staff will then advise your employees on what is needed in order to get their levels to an appropriate healthy level.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <div id="header" style={secondBackgroundStyle} />

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em' }}>Contact Us</Header>
          <p style={{ fontSize: '1.33em' }}>
            Contact us today by calling 855-4TheFIX or emailing Info@TheChicagoFIX.com
        </p>
        </Container>
      </Segment>

      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={7}>
                <Header as='h4' inverted>By Benjamin Odisho</Header>
                <p>Take some time to visit our sister site, theChicagoFIX.com!</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  )
}

export default App
