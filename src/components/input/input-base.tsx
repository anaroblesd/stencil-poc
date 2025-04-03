import { Component, Prop, h, State, AttachInternals } from '@stencil/core';

@Component({
  tag: 'input-base',
  styleUrl: 'input-base.css',
  shadow: true,
})
export class InputBase {
  @Prop() name: string;
  @Prop() label: string;

  @State() value: string;
  @State() classes: string;

  private getClases(): string {
    return `input-container ${this.value ? 'focused' : ''}`
  }

  @AttachInternals() internals: ElementInternals;

  handleChange(event) {
    this.value = event.target.value;
    this.internals.setFormValue(event.target.value);
  }
  render() {
    return (
      <div class={this.getClases()}> 
        <input name={this.name} value={this.value} onInput={(event) => this.handleChange(event)}></input>
        <label htmlFor={this.name}>{this.label}</label>
      </div>
    );
  }
}
