/* global console:false */
class MainController {
  constructor (SearchService) {
    'ngInject';
    this.searchService = SearchService;
  }

  search() {
    this.searchService
      .search(this.searchTerm)
      .then(response => {
        this.items = JSON.stringify(response, null, "    ");
      });
  }
}

export { MainController };
