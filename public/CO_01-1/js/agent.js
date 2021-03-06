class Agent00 {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
  }

  draw() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, width);

    context.beginPath();
    context.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    context.stroke();
  }
}

class Agent01 {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.vx = 0;
    this.vy = 0;
    this.friction = 0.97;
  }

  draw() {
    this.vx += random(-2, 2);
    this.vy += random(-2, 2);
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.x += this.vx;
    this.y += this.vy;

    this.constrain();

    context.beginPath();
    context.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    context.stroke();
  }

  constrain() {
    if (this.x < 0) {
      this.x = 0;
      this.vx *= -1;
    } else if (width < this.x) {
      this.x = width;
      this.vx *= -1;
    }
    if (this.y < 0) {
      this.y = 0;
      this.vy *= -1;
    } else if (height < this.y) {
      this.y = height;
      this.vy *= -1;
    }
  }
}

class Agent02 {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.vx = 0;
    this.vy = 0;
    this.fx = 0;
    this.fy = 0;
    this.friction = 0.95;
  }

  draw() {
    this.fx += random(-.3, .3);
    this.fy += random(-.3, .3);
    this.fx *= this.friction;
    this.fy *= this.friction;
    this.vx += this.fx;
    this.vy += this.fy;
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.x += this.vx;
    this.y += this.vy;

    this.constrain();

    context.beginPath();
    context.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    context.stroke();
  }

  constrain() {
    if (this.x < 0) {
      this.x = 0;
      this.vx *= -1;
    } else if (width < this.x) {
      this.x = width;
      this.vx *= -1;
    }
    if (this.y < 0) {
      this.y = 0;
      this.vy *= -1;
    } else if (height < this.y) {
      this.y = height;
      this.vy *= -1;
    }
  }
}

class Agent03 {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.v = 0;
    this.r = 0;
    this.friction = 0.9;
  }

  draw() {
    this.v += 1;
    this.v *= 0.85;
    this.r += random(-0.2, 0.2);
    var vx = Math.cos(this.r) * this.v;
    var vy = Math.sin(this.r) * this.v;
    this.x += vx;
    this.y += vy;

    this.constrain();

    context.beginPath();
    context.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    context.stroke();
  }

  constrain() {
    if (this.x < 0) {
      this.x = 0;
      this.r += Math.PI;
    } else if (width < this.x) {
      this.x = width;
      this.r += Math.PI;
    }
    if (this.y < 0) {
      this.y = 0;
      this.r += Math.PI;
    } else if (height < this.y) {
      this.y = height;
      this.r += Math.PI;
    }
  }
}

class Agent04 {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.v = 0;
    this.r = 0;
    this.friction = 0.9;
  }

  draw() {
    this.v += random(0,3);
    this.v *= 0.5;
    this.r += random(-0.3,0.3);
    var vx = Math.cos(this.r) * this.v;
    var vy = Math.sin(this.r) * this.v;
    this.x += vx;
    this.y += vy;

    this.constrain();

    context.beginPath();
    context.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    context.stroke();
  }

  constrain() {
    if (this.x < 0) {
      this.x = 0;
      this.r += Math.PI;
    } else if (width < this.x) {
      this.x = width;
      this.r += Math.PI;
    }
    if (this.y < 0) {
      this.y = 0;
      this.r += Math.PI;
    } else if (height < this.y) {
      this.y = height;
      this.r += Math.PI;
    }
  }
}

class Agent05 {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.v = 0;
    this.r = 0;
    this.rv = 0;
    this.friction = 0.9;
  }

  draw() {
    this.v += random(0,1);
    this.v *= 0.95;
    this.rv += random(-0.1,0.1);
    this.rv*=0.95;
    this.r += this.rv;
    var vx = Math.cos(this.r) * this.v;
    var vy = Math.sin(this.r) * this.v;
    this.x += vx;
    this.y += vy;

    this.constrain();

    context.beginPath();
    context.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    context.stroke();
  }

  constrain() {
    if (this.x < 0) {
      this.x = 0;
      this.r += Math.PI;
    } else if (width < this.x) {
      this.x = width;
      this.r += Math.PI;
    }
    if (this.y < 0) {
      this.y = 0;
      this.r += Math.PI;
    } else if (height < this.y) {
      this.y = height;
      this.r += Math.PI;
    }
  }
}

class Agent06 {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.v = 0;
    this.vf = 0;
    this.r = 0;
    this.rv = 0;
    this.rvf = 0;
    this.friction = 0.9;
  }

  draw() {
    this.vf += random(-2, 2);
    this.vf *= 0.9;
    this.v += this.vf;
    this.v *= 0.98;
    this.rvf += random(-0.02, 0.02);
    this.rvf *= 0.95;
    this.rv += this.rvf;
    this.rv *= 0.95;
    this.r += this.rv;
    var vx = Math.cos(this.r) * this.v;
    var vy = Math.sin(this.r) * this.v;
    this.x += vx;
    this.y += vy;

    this.constrain();

    var r = Math.abs(this.v * 12);
    context.lineWidth = r / 20;
    context.beginPath();
    context.arc(this.x, this.y, r, 0, Math.PI * 2, false);
    context.stroke();
  }

  constrain() {
    if (this.x < 0) {
      this.x = 0;
      this.r += Math.PI;
    } else if (width < this.x) {
      this.x = width;
      this.r += Math.PI;
    }
    if (this.y < 0) {
      this.y = 0;
      this.r += Math.PI;
    } else if (height < this.y) {
      this.y = height;
      this.r += Math.PI;
    }
  }
}

class Agent07 {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.oX = this.x;
    this.oY = this.y;
    this.v = 0;
  	this.vf = 0;
  	this.r = 0;
  	this.rv = 0;
  	this.rvf = 0;
  	this.friction = 0.9;
  }

  draw() {
    this.oX = this.x;
    this.oY = this.y;

    this.vf += random(-3, 3);
  	this.vf *= 0.9;
  	this.v += this.vf;
  	this.v *= 0.95;
  	this.rvf += random(-0.01, 0.01);
  	this.rvf *= 0.95;
  	this.rv += this.rvf;
  	this.rv *= 0.95;
  	this.r += this.rv;
  	var vx = Math.cos(this.r) * this.v;
  	var vy = Math.sin(this.r) * this.v;
  	this.x += vx;
  	this.y += vy;

    this.constrain();

    context.beginPath();
    // context.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    context.moveTo(this.oX, this.oY);
    context.lineTo(this.x, this.y);
    context.stroke();
  }

  constrain() {
    if (this.x < 0) {
      this.x = 0;
      this.r += Math.PI;
    } else if (width < this.x) {
      this.x = width;
      this.r += Math.PI;
    }
    if (this.y < 0) {
      this.y = 0;
      this.r += Math.PI;
    } else if (height < this.y) {
      this.y = height;
      this.r += Math.PI;
    }
  }
}

class Agent08 {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.oX = this.x;
    this.oY = this.y;
    this.v = 0;
  	this.vf = 0;
  	this.r = 0;
  	this.rv = 0;
  	this.rvf = 0;
  	this.friction = 0.9;
  }

  draw() {
    this.oX = this.x;
    this.oY = this.y;

    this.vf += random(-0.07, 0.07);
  	this.vf *= 0.99;
  	this.v += this.vf;
  	this.v *= 0.95;
  	this.rvf += random(-0.001, 0.001);
  	this.rvf *= 0.99;
  	this.rv += this.rvf;
  	this.rv*=0.95;
  	this.r += this.rv;
  	var vx = Math.cos(this.r) * this.v;
  	var vy = Math.sin(this.r) * this.v;
  	this.x += vx;
  	this.y += vy;

    this.constrain();

    context.lineWidth = this.vf * 12 + 1;
    context.beginPath();
    // context.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    context.moveTo(this.oX, this.oY);
    context.lineTo(this.x, this.y);
    context.stroke();
  }

  constrain() {
    if (this.x < 0) {
      this.x = 0;
      this.r += Math.PI;
    } else if (width < this.x) {
      this.x = width;
      this.r += Math.PI;
    }
    if (this.y < 0) {
      this.y = 0;
      this.r += Math.PI;
    } else if (height < this.y) {
      this.y = height;
      this.r += Math.PI;
    }
  }
}

class Agent09 {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.oX = this.x;
    this.oY = this.y;
    this.v = 0;
  	this.vf = 0;
  	this.r = 0;
  	this.rv = 0;
  	this.rvf = 0;
  	this.friction = 0.9;
  }

  draw() {
    this.oX = this.x;
    this.oY = this.y;

    if(random(0, 1) < 0.1){
  		this.vf += random(-0.5, 0.5);
  	}
  	this.v += this.vf;
  	this.v *= 0.95;
  	this.rvf += random(-0.1, 0.1);
  	this.rvf *= 0.99;
  	this.rv += this.rvf;
  	this.rv *= 0.95;
  	this.r += this.rv;
  	var vx = Math.cos(this.r) * this.v;
  	var vy = Math.sin(this.r) * this.v;
  	this.x += vx;
  	this.y += vy;

    this.constrain();

    // context.lineWidth = this.vf * 3 + 1;
    context.beginPath();
    // context.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    context.moveTo(this.oX, this.oY);
    context.lineTo(this.x, this.y);
    context.stroke();
  }

  constrain() {
    if (this.x < 0) {
      this.x = 0;
      this.r += Math.PI;
    } else if (width < this.x) {
      this.x = width;
      this.r += Math.PI;
    }
    if (this.y < 0) {
      this.y = 0;
      this.r += Math.PI;
    } else if (height < this.y) {
      this.y = height;
      this.r += Math.PI;
    }
  }
}

class Agent10 {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.oX = this.x;
    this.oY = this.y;
    this.v = 0;
  	this.vf = 0;
  	this.r = 0;
  	this.rv = 0;
  	this.rvf = 0;
  	this.friction = 0.9;
  }

  draw() {
    this.oX = this.x;
    this.oY = this.y;

    if(random(0, 1) < 0.1){
  		this.vf = random(-0.5, 0.5) * 2;
  		this.rvf = random(-0.01, 0.01);
  	}
  	this.v += this.vf;
  	this.v *= 0.95;
  	this.rv += this.rvf;
  	this.rv*=0.95;
  	this.r += this.rv;
  	var vx = Math.cos(this.r) * this.v;
  	var vy = Math.sin(this.r) * this.v;
  	this.x += vx;
  	this.y += vy;

    this.constrain();

    context.beginPath();
    // context.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    context.moveTo(this.oX, this.oY);
    context.lineTo(this.x, this.y);
    context.stroke();
  }

  constrain() {
    if (this.x < 0) {
      this.x = 0;
      this.r += Math.PI;
    } else if (width < this.x) {
      this.x = width;
      this.r += Math.PI;
    }
    if (this.y < 0) {
      this.y = 0;
      this.r += Math.PI;
    } else if (height < this.y) {
      this.y = height;
      this.r += Math.PI;
    }
  }
}

class Agent11 {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.oX = this.x;
    this.oY = this.y;
    this.radr = 0;
  	this.radv = 0;
  	this.v = 0;
  	this.vf = 0;
  	this.r = 0;
  	this.rv = 0;
  	this.rvf = 0;
  	this.friction = 0.9;
  }

  draw() {
    this.oX = this.x;
    this.oY = this.y;

    this.radr += random(-0.1, 0.1);
  	this.rv = Math.cos(this.radr) * 100;
  	this.r += this.rv;

  	this.radv += random(-0.1, 0.1);
  	this.v = Math.cos(this.radv) * 16;

  	var vx = Math.cos(this.r) * this.v;
  	var vy = Math.sin(this.r) * this.v;
  	this.x += vx;
  	this.y += vy;

    this.constrain();

    context.beginPath();
    // context.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    context.moveTo(this.oX, this.oY);
    context.lineTo(this.x, this.y);
    context.stroke();
  }

  constrain() {
    if (this.x < 0) {
      this.x = 0;
      this.r += Math.PI;
    } else if (width < this.x) {
      this.x = width;
      this.r += Math.PI;
    }
    if (this.y < 0) {
      this.y = 0;
      this.r += Math.PI;
    } else if (height < this.y) {
      this.y = height;
      this.r += Math.PI;
    }
  }
}

class Agent12 {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.oX = this.x;
    this.oY = this.y;
    this.radr = 0;
  	this.radv = 0;
  	this.v = 0;
  	this.vf = 0;
  	this.r = 0;
  	this.rv = 0;
  	this.rvf = 0;
  	this.friction = 0.9;
  }

  draw() {
    this.oX = this.x;
    this.oY = this.y;

    this.radr += random(-0.2, 0.2);
  	this.rv = Math.sin(this.radr)*0.2;
  	this.r += this.rv;

  	this.radv += random(0, 0.1);
  	this.v = Math.sin(this.radv) * 5;

  	var vx = Math.cos(this.r) * this.v;
  	var vy = Math.sin(this.r) * this.v;
  	this.x += vx;
  	this.y += vy;

    this.constrain();

    context.beginPath();
    // context.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    context.moveTo(this.oX, this.oY);
    context.lineTo(this.x, this.y);
    context.stroke();
  }

  constrain() {
    if (this.x < 0) {
      this.x = 0;
      this.r += Math.PI;
    } else if (width < this.x) {
      this.x = width;
      this.r += Math.PI;
    }
    if (this.y < 0) {
      this.y = 0;
      this.r += Math.PI;
    } else if (height < this.y) {
      this.y = height;
      this.r += Math.PI;
    }
  }
}
