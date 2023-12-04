
import { useState ,useEffect} from 'react';
import PhotoWall from './components/PhotoWall';
import Title from './components/Title';
import AddPhoto from './components/AddPhoto';
import {Switch,Route} from 'react-router-dom';
import { removePost } from './redux/actions';
import Single from './components/Single';
function App(props) {
  useEffect(() => {
    // Dispatch the action when the component mounts
    props.startLoadingPost();
  }, []);
  return (
    <div>
      <Switch>
     <Route exact path="/" render={()=>(
      <>
        <Title/>
        <PhotoWall {...props}  />
        </>
        )}/>  
        
          <Route path="/AddPhoto" render={({history})=>(
            <AddPhoto {...props} onHistory={history}/>
  )}
          />
    <Route path="/single/:id" render={(params)=>(
      <Single  {...props} {...params}/>
    )}>

    </Route>
          
    </Switch>
    </div>
  );
}

export default App;
