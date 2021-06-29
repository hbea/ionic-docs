(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[24216],{38632:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return m},default:function(){return l}});var o=t(22122),i=t(19756),a=(t(67294),t(3905)),r={sidebar_label:"Performance"},s={unversionedId:"vue/performance",id:"vue/performance",isDocsHomePage:!1,title:"Vue Performance",description:"v-for with Ionic Components",source:"@site/docs/vue/performance.md",sourceDirName:"vue",slug:"/vue/performance",permalink:"/docs/vue/performance",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/vue/performance.md",version:"current",sidebar_label:"Performance",frontMatter:{sidebar_label:"Performance"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/vue/troubleshooting"},next:{title:"Animations",permalink:"/docs/utilities/animations"}},m=[{value:"v-for with Ionic Components",id:"v-for-with-ionic-components",children:[]}],p={toc:m};function l(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"v-for-with-ionic-components"},"v-for with Ionic Components"),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"v-for")," with Ionic components, we recommend using Vue's ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," attribute. This allows Vue to re-render loop elements in an efficient way by only updating the content inside of the component rather than re-creating the component altogether."),(0,a.kt)("p",null,"By using ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," you can provide a stable identity for each loop element so Vue can track insertions and deletions within the iterator. Below is an example of how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <ion-page>\n    <ion-content>\n      <ion-item v-for=\"item of items\" :key=\"item.id\">\n        <ion-label>{{ item.value }}</ion-label>\n      </ion-item>\n    </ion-content>\n  </ion-page>\n</template>\n\n<script>\nimport { IonContent, IonItem, IonLabel, IonPage } from '@ionic/vue';\nimport { defineComponent } from 'vue';\n\nexport default defineComponent({\n  components: {\n    IonContent,\n    IonItem,\n    IonLabel,\n    IonPage\n  },\n  setup() {\n    const items = ref([\n      { id: 0, value: 'Item 0' },\n      { id: 1, value: 'Item 1' },\n      ...\n    ]);\n    \n    return { items }\n  }\n});\n<\/script>\n")),(0,a.kt)("p",null,"In this example, we have an array of objects called ",(0,a.kt)("inlineCode",{parentName:"p"},"items"),". Each object contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),". Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," attribute, we pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"item.id")," for each object. This ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," is used to provide a stable identity for each loop element."),(0,a.kt)("p",null,"For more information on how Vue manages state with ",(0,a.kt)("inlineCode",{parentName:"p"},"v-for")," see ",(0,a.kt)("a",{parentName:"p",href:"https://v3.vuejs.org/guide/list.html#maintaining-state"},"https://v3.vuejs.org/guide/list.html#maintaining-state")))}l.isMDXComponent=!0}}]);