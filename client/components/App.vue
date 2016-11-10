<template>
  <div id="app">
    <router-view></router-view>
    <select class="ui dropdown">
      <option value="">性别</option>
      <option value="1">Male</option>
      <option value="0">Female</option>
    </select>
    中文文字
    <div class="ui left icon input">
      <i class="user icon"></i>
      <input type="text" name="email" placeholder="E-mail address">
    </div>
    <select class="ui dropdown selection">
      <option value="">Gender</option>
      <option value="1">Male</option>
      <option value="0">Female</option>
    </select>
  </div>  
</template>

<style>
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}
.page {
  text-align: center;
}
code {
  background-color: #f0f0f0;
  padding: 3px 5px;
  border-radius: 2px;
}
</style>
