import{r,h as o}from"./p-75b8bc7c.js";import"./p-e0123cd3.js";import"./p-85cd1ecc.js";import"./p-d7b2933a.js";import"./p-7cee5bd7.js";import{A as s,H as c}from"./p-d73116b3.js";const t=class{constructor(o){r(this,o)}buildAccordions(){const r=document.createDocumentFragment(),o=s.newInstance().withSummary(c.newInstance().withTag("strong").withInnerText("Accordion 1 Title").build()).withDetails(c.newInstance().withTag("p").withInnerText("Lorem Ipsum Dolor Samet").build()).build();return r.appendChild(o),r}render(){return[o("div",{ref:r=>{r.append(this.buildAccordions())}})]}};t.TAG_NAME="snt-accordion-builder";export{t as snt_accordion_builder}