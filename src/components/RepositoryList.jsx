import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from 'react';

import '../styles/repositories.scss';

//https://api.github.com/users/cesarfavero/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/cesarfavero/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  return(
    <section className="repository-list">
      <h1>Lista de Repo</h1><br/>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
        
      </ul>


    </section>
  )
}