<template>
  <header>
    <div class="top-search-bar">
      <table class="search-bar">
        <th class="search-machine">설비별 조회</th>
        <td class="machine-content">
          <a href="#">DHC-1</a>
          <a href="#">DHC-2</a>
          <a href="#">DHC-3</a>
        </td>
        <th class="width"></th>
        <th class="search-process">공정별 조회</th>
        <th class="width"></th>
        <th class="search-material">자재 조회</th>
        <th class="width"></th>
        <th class="realTime-monitoring">실시간 모니터링</th>
      </table>
    </div>
  </header>
</template>

<style scoped>
.search-bar {
  position: absolute;
  right: 10px;
  top: 120px;
}

.width {
  width: 50px;
}

.search-machine {
  width: 140px;
  height: 20px;
  cursor: pointer;
  outline: auto;
}

.search-process {
  width: 140px;
  height: 20px;
  cursor: pointer;
  outline: auto;
}

.search-material {
  width: 140px;
  height: 20px;
  cursor: pointer;
  outline: auto;
}

.realTime-monitoring {
  width: 140px;
  height: 20px;
  cursor: pointer;
  outline: auto;
}
</style>
