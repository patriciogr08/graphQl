import { ServerService } from './services/ServerService';
import defaultConfig from './config/default';


new ServerService(defaultConfig).start();