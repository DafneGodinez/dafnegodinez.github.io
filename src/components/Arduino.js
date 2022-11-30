import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';


const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $description: String!
    $url: String!
  ) {
    createLink(description: $description, url: $url) {
      id
      url
      description
    }
  }
`;

const CreateLink = () => { //guarda los campos a capturar
    const navigate = useNavigate();

  const [formState, setFormState] = useState({
    description: '', //campos que necesitamos
    url: ''
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      description: formState.description,
      url: formState.url
    },
    onCompleted: () => navigate('/')
  });

  return (
    <div>
      <form
        onSubmit={(e) => {//cuando le de click al boton 
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description} //Lo que el usuario escriba lo manda a la variable description
            onChange={(e) =>
              setFormState({ //el objeto cambia
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="Name" //texto en gris de la caja de texto
          />
          <input
            className="mb2"
            value={formState.url}
            onChange={(e) => // el FormState solo cambia el url
              setFormState({
                ...formState,
                url: e.target.value
              })
            }
            type="text"
            placeholder="Description"
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateLink;