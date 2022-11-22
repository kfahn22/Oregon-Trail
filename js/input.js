// Valid Keys
const all = 'abcdefghijklmnopqrstuvwxyz';
const valid = (all + all.toUpperCase() + ' 1234567890').split('');

function validate(key) {
  return valid.includes(key);
}

class Input {
  constructor(slide) {
    this.buffer = '';
    this.blink = false;
    this.parent = slide;
  }

  updateParent(parent) {
    this.parent = parent;
  }

  addKey(key, keyCode) {
    if (keyCode == BACKSPACE) {
      this.buffer = this.buffer.substring(0, this.buffer.length - 1);
    } else if (keyCode == ENTER) {
      console.log('enter');
      const result = this.buffer;
      this.clear();
      return result;
    } else if (validate(key)) {
      if (this.parent.promptLimit > this.buffer) this.buffer += key;
    }
  }

  render() {
    fill(255);
    textAlign(LEFT);
    let { x, y } = this.parent.promptPosition;
    text(this.buffer, x, y);
    x += textWidth(this.buffer);
    // Very silly way to blink the cursor
    if (this.blink && frameCount % 60 == 0) this.blink = false;
    else if (!this.blink && frameCount % 20 == 0) this.blink = true;
    if (this.blink) text('█', x, y);
  }

  clear() {
    this.buffer = '';
  }
}
