import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss';

type  Repository = {
  name: string;
  description: string;
  html_url: string;
}

const repositoryData = {
  name: 'inform',
  description: 'Forms in React',
  link: 'https://github.com/petertechdev'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() =>{
    fetch('https://api.github.com/users/petertechdev/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  );
}