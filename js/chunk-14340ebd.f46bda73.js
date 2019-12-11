(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14340ebd"],{5652:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("form",{staticClass:"my-4"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:t.newCategoryName},on:{input:function(e){e.target.composing||(t.newCategoryName=e.target.value)}}})]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createCategory(e)}}},[t._v("新增")])])])]),t.isLoading?a("Spinner"):a("table",{staticClass:"table"},[a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col",width:"60"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Category Name")]),a("th",{attrs:{scope:"col",width:"210"}},[t._v("Action")])])]),a("tbody",t._l(t.categories,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),a("td",{staticClass:"position-relative"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[t._v(t._s(e.name))]),a("input",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:e.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.handleCancel(e.id)}}},[t._v("✕")])]),a("td",{staticClass:"d-flex justify-content-between"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.toggleIsEditing(e.id)}}},[t._v("Edit")]),a("button",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.updateCategory({categoryId:e.id,name:e.name})}}},[t._v("Save")]),a("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteCategory(e.id)}}},[t._v("Delete")])])])})),0)])],1)},n=[],s=(a("a4d3"),a("4de4"),a("4160"),a("d81d"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("159b"),a("2fa7")),i=(a("96cf"),a("2375")),o=a("e04c"),c=a("be6c"),u=a("2fa3");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(a,!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={components:{AdminNav:o["a"],Spinner:i["a"]},data:function(){return{newCategoryName:"",categories:[],isProcessing:!1,isLoading:!0}},created:function(){this.fetchCategories()},methods:{fetchCategories:function(){var t,e,a;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(c["a"].categories.get());case 3:if(t=r.sent,e=t.data,a=t.statusText,"OK"===a){r.next=8;break}throw new Error(e.message);case 8:this.categories=e.categories.map((function(t){return g({},t,{isEditing:!1})})),this.isLoading=!1,r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),this.isLoading=!1,u["a"].fire({icon:"error",title:"Can't fetch categories"});case 16:case"end":return r.stop()}}),null,this,[[0,12]])},createCategory:function(){var t,e,a;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,this.isProcessing=!0,r.next=4,regeneratorRuntime.awrap(c["a"].categories.create({name:this.newCategoryName}));case 4:if(t=r.sent,e=t.data,a=t.statusText,"OK"===a&&"success"===e.status){r.next=9;break}throw new Error(a);case 9:this.isProcessing=!1,this.newCategoryName="",this.fetchCategories(),r.next=18;break;case 14:r.prev=14,r.t0=r["catch"](0),this.isProcessing=!1,u["a"].fire({icon:"error",title:"Not able to add category"});case 18:case"end":return r.stop()}}),null,this,[[0,14]])},deleteCategory:function(t){var e,a,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,regeneratorRuntime.awrap(c["a"].categories.delete({categoryId:t}));case 3:if(e=n.sent,a=e.data,r=e.statusText,"OK"===r&&"success"===a.status){n.next=8;break}throw new Error(a.message);case 8:this.categories=this.categories.filter((function(e){return e.id!==t})),u["a"].fire({icon:"success",title:"Delete category successfully"}),n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](0),u["a"].fire({icon:"error",title:"Not able to delete category"});case 15:case"end":return n.stop()}}),null,this,[[0,12]])},toggleIsEditing:function(t){this.categories=this.categories.map((function(e){return e.id!==t?e:g({},e,{isEditing:!e.isEditing})}))},updateCategory:function(t){var e,a,r,n,s;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return e=t.categoryId,a=t.name,i.next=3,regeneratorRuntime.awrap(c["a"].categories.update({categoryId:e,name:a}));case 3:if(r=i.sent,n=r.data,s=r.statusText,"OK"===s&&"success"===n.status){i.next=8;break}throw new Error(n.message);case 8:this.toggleIsEditing(e);case 9:case"end":return i.stop()}}),null,this)},handleCancel:function(t){this.categories=this.categories.map((function(e){return e.id!==t?e:g({},e,{name:e.nameCached})})),this.toggleIsEditing(t)}}},p=l,m=(a("8dc4"),a("2877")),f=Object(m["a"])(p,r,n,!1,null,"15221bc8",null);e["default"]=f.exports},"8dc4":function(t,e,a){"use strict";var r=a("d73e"),n=a.n(r);n.a},be6c:function(t,e,a){"use strict";a("b0c0");var r=a("2fa3");e["a"]={restaurants:{create:function(t){var e=t.formData;return r["b"].post("/admin/restaurants",e)},get:function(){return r["b"].get("/admin/restaurants")},getDetail:function(t){var e=t.restaurantId;return r["b"].get("/admin/restaurants/".concat(e))},delete:function(t){var e=t.restaurantId;return r["b"].delete("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,a=t.formData;return r["b"].put("/admin/restaurants/".concat(e),a)}},categories:{get:function(){return r["b"].get("/admin/categories")},create:function(t){var e=t.name;return r["b"].post("/admin/categories",{name:e})},delete:function(t){var e=t.categoryId;return r["b"].delete("/admin/categories/".concat(e))},update:function(t){var e=t.categoryId,a=t.name;return r["b"].put("/admin/categories/".concat(e),{name:a})}},users:{get:function(){return r["b"].get("/admin/users")},update:function(t){var e=t.userId,a=t.isAdmin;return r["b"].put("/admin/users/".concat(e),{isAdmin:a})}}}},d73e:function(t,e,a){},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde");r({target:"Array",proto:!0,forced:!s("map")},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e04c:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("h1",[t._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v("| "),a("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v("| "),a("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},n=[],s=a("2877"),i={},o=Object(s["a"])(i,r,n,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-14340ebd.f46bda73.js.map