import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
//context
import { AuthContextProvider } from './context/HR-context/authContext'
import { FormContextProvider } from './context/HR-context/formContext'
import { AddContextProvider } from './context/HR-context/addEmpContext'
//react query
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //to cover all components for context


    <AuthContextProvider>
      <FormContextProvider>
       <AddContextProvider>
        <QueryClientProvider client={queryClient}>
       <App /> 
          <ReactQueryDevtools/>
        </QueryClientProvider>
       </AddContextProvider>
      </FormContextProvider>
    </AuthContextProvider>
    


);
