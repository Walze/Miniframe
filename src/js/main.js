import { CssImporter } from './configs/StylePathReplacer';

// JS files
import './configs/helpers'
import './routes';

// CSS files
new CssImporter(['main.css']);
