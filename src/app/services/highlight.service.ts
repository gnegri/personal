import { Injectable, Inject } from '@angular/core';

import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/plugins/file-highlight/prism-file-highlight';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/previewers/prism-previewers';

declare var Prism: any;

@Injectable({
  providedIn: 'root',
})
export class HighlightService {

  constructor() { }

  highlightAll() {
    Prism.highlightAll();
  }

  retrigger() {
    Prism.fileHighlight();
  }
}
