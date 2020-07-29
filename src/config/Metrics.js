/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Screen Deminensions Globally
 * Date:
 */
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default {
  DEVICE_HEIGHT: height,
  DEVICE_WIDTH: width,
};
