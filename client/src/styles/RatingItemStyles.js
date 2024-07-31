import { StyleSheet } from 'react-native';
import colors from './Colors';

const RatingItemStyles = StyleSheet.create({
  item: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RatingItemStyles;
