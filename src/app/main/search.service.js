class SearchService {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
  }

  search (searchTerm = '') {
    return this.$http.get(`/search/${searchTerm}`);
  }
}

export { SearchService };
