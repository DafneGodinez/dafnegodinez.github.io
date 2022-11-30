import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';


const LINEAR_QUERY = gql`
  query LinearPredictions($values: String!) {
   linearPredictions(values: $values)   
  }
`;


const Linear = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    description: '',
    url: ''
  });


   const { data } = useQuery(LINEAR_QUERY, {
     variables: {
       values: formState.description,
     },
   });



  //console.log(data)

  return (

    <div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
	  alert(data.linearPredictions);

        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="Values to predict"
          />


        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Linear;