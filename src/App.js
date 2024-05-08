
import React, { useEffect, useState } from 'react';

export default function UserDetails() {
  const [user, setUser] = useState(null);
  const email = 'dharanikannan46@gmail.com';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
          headers: {
            'Authorization': `bearer ${email}`
          }
        });
        if (!res.ok) {
          throw new Error("Network failure");
        }
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Caught error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {user === null ? (
        <p>Loading...</p>
      ) : (
        user.map(u => (
          <div key={u.id}>
            {u.id} {u.name}
          </div>
        ))
      )}
    </div>
  );
}
/*import React,{useEffect,useState} from 'react';


export default function UserDetails(){


  const [user,Setuser]=useState(null);
  const email='dharanikannan46@gmail.com'



  useEffect(()=>
    {
         const result=async()=>{
          try{
            const res=await fetch('https://jsonplaceholder.typicode.com/users',
              {
                headers:{
                  'Authorization':'bearer $(email)'
                }
              }
            )
              if(!res.ok){
                throw new error("network failure")
              }

              const data=await res.json()
              Setuser(data)

          }

          catch(error){
            console.error("caught error")
          }
        };
          UserDetails();
         },[])
        }
        
      
      


         return(
          <div>
              {
                user.map(u=>{
                  <div>
                     {u.id}{u.name}
                    </div>

                }
                 
                )
              }
          </div>
         );
        }

        */








































/*import Axios from 'axios';

export default function App() {

  const [user,setUser]=useState([]);
  useEffect(()=>
    {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(res=>setUser(res))
})

  return (
      <div className="App">
        {user.map(u =>(
          <div>
           {u.id}{u.name}
           </div>
        )
        )

        }
        
      </div>
  );


*/