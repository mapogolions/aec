'use strict';

class Expression {}

class Literal extends Expression {
  constructor(value) {
    this.value = value;
  }
}

class Var extends Expression {
  constructor(variable) {
    this.variable = variable;
  }
}

class Operation extends Expression {
  constructor(leftExpr, op, rightExpr) {
    this.leftExpr = leftExpr;
    this.op = op;
    this.rightExpr = rightExpr;
  }
}

class Let extends Expression {
  constructor(variable, assignExpr, inExpr) {
    this.variable = variable;
    this.assignExpr = assignExpr;
    this.inExpr = inExpr;
  }
}

module.exports = { Expression, Literal, Var, Operation, Let };
