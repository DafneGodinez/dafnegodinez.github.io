import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const RESNET_QUERY = gql`
   query ResnetPredictions($photourl: String!) {
      resnetPredictions(photourl: $photourl)   
     }
`;


const Resnet = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    description: '',
    url: ''
  });

  const { data } = useQuery(RESNET_QUERY, {
       variables: { 
         photourl: formState.description,
       },
  });


  return (

    <div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(data.resnetPredictions);	
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
            placeholder="URL image to upload..."
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Resnet;