import * as model from '../../models';
import * as vm from './viewModel';

export const mapLoginEntityVmToModel = (license: vm.vehicleModel): model.vehicleModel => ({
  ...license,
});
