


export function capitalizeFilter() {
  'ngInject';

  return (input) => {
    input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  };
}

export function capitalizeAllFilter() {
  return (input) => {
    angular.isDefined(input) ? input.split(' ').map(wrd => wrd.charAt(0).toUpperCase() + wrd.substr(1).toLowerCase()).join(' ') : '';
  };
}

export function logFilter($log) {
  'ngInject';

  return (input) => {
    $log.debug(angular.toJson(input));
    return input;
  };
}
