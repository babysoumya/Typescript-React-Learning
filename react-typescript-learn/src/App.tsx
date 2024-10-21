import './App.css';
import { Greet } from './components/Greet';
import {Person} from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';

import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';

import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';

import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile} from './components/auth/Profile';
import { List } from './components/generics/List';

import { RandomNumber } from './components/restriction/RandomNumber';

import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';

import { Text } from './components/Polymorphic/Text';

function App() {
  const personName = {
    fname: 'Azad',
    lname: 'Kunchala' 
  }
  const nameList = [
    {
      fname: 'Baby',
      lname: 'Soumya'
    },
    { 
      fname: 'Yashu',
      lname: 'Mukesh'
    },
    {
      fname: 'Puri',
      lname: 'Jagannath'
    }
  ]
  return (
    <div className='App'>
      <Greet name = 'Babes' isLoggedIn={false} messageCount={20}/>
      <Person name = {personName}/>
      <PersonList names= {nameList}/>
      <Status status='loading' />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>
        Oscar Goes to Dicaprio!
        </Heading>
      </Oscar>
      <Button handleClick={ (event,id) => {
        console.log('Button Clicked', event, id)
      }
      }/>
      <Input value='' handleChange={event =>console.log(event)}/>
      <Container styles = {{border: '1px solid black', padding: '1rem'}}/>
      <ThemeContextProvider>
        <Box  />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Counter message = 'The count value is' />

      <Private isLoggedIn={true} component={Profile}/>
      {/* <List items = {['Batman','Superman', 'SpiderMan']} 
      onClick={(item) => console.log(item)} />
      <List items = {[1,2,3]} 
      onClick={(item) => console.log(item)} /> */}
      <List items = {[
        {
          id: 1,
          first: 'Bryce',
          last: 'Noodle',
        },
        {
          id:2,
          first: 'Clark',
          last: 'washington',
        },
        {
          id:3,
          first: 'Prince',
          last: 'Harry',
        },
      ]} 
      onClick={(item) => console.log(item)} />
      <RandomNumber value={10} isPositive />

      <Toast position = 'center'></Toast>
      <CustomButton variant= 'primary' onClick= {()=> console.log('Button clicked')}>
       Primary Button
        </CustomButton>
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as= 'label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
    </div>
  )
}

export default App;
