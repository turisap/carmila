/**
 * Created by HP on 10-Dec-17.
 */
import { dishes } from '../data/data'

export default (filter) => {
    return dishes.filter(d => d.category === filter);
}