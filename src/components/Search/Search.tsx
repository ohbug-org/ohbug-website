import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index, Hits } from 'react-instantsearch-dom';
import { useClickAway } from 'ahooks';

import Input from './Input';
import Results from './Results';
import Hit from './Hit';
import config from '../../../config.js';

import styles from './Search.module.less';

const indices = [{ name: config.search.indexName, title: `docs` }];

const Search: React.FC = () => {
  const [query, setQuery] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>();
  useClickAway(() => setFocus(false), inputRef);

  const searchClient = algoliasearch(
    config.search.algoliaAppId,
    config.search.algoliaSearchKey,
  );
  return (
    <section className={styles.root}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <Input innerRef={inputRef} onFocus={() => setFocus(true)} />

        <div
          className={styles.result}
          style={{ display: query && focus ? 'flex' : 'none' }}
        >
          <section className={styles.section}>
            {indices.map(({ name, title }) => (
              <Index indexName={name} key={name}>
                <div className={styles.title}>{title}</div>
                <Results />
                <Hits hitComponent={Hit} />
              </Index>
            ))}
          </section>

          <div className={styles.footer}>
            Search by
            <a className={styles.logo} href="https://www.algolia.com/docsearch">
              Algolia
            </a>
          </div>
        </div>
      </InstantSearch>
    </section>
  );
};

export default Search;
