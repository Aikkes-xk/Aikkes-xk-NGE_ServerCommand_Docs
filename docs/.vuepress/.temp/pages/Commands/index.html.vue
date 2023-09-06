<template><div><h1 id="指令表介绍" tabindex="-1"><a class="header-anchor" href="#指令表介绍" aria-hidden="true">#</a> 指令表介绍</h1>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>本指令表仅限于[NGE]旗下服务器，具体可用服务器会在下方进行标注！</p>
</div>
<p>部分指令只能用于会员玩家或管理使用，在指令表中会进行标注可用人群哦！</p>
<h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2>
<p>在服务器中，使用回车[Enter]键，在游戏聊天窗口输入以/ 开头的指令！</p>
<p>通常他是这样的</p>
<p><img src="/imag/commandtishitu.png" alt="展示">
这里我们展示如何执行一个指令</p>
<p>这个指令的意思是，使用购买指令/buy 购买一个id 17的物品</p>
<p><img src="/imag/coyanshizhiling1.png" alt="使用指令">
输入完成后点击回车发送，这时候聊天窗口处会显示购买成功或者其他的提示信息！</p>
<p>根据提示进行下一步操作就可以了！</p>
<h2 id="服务器指令汇总表" tabindex="-1"><a class="header-anchor" href="#服务器指令汇总表" aria-hidden="true">#</a> 服务器指令汇总表</h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>此表格仅用于快速查询，详细使用请查看指令说明！</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">特别注意</p>
<p>(括号)中的内容，需要根据内容替换为你要查询或者使用的内容！</p>
<p>[方括号]中的内容，是可选项目，就是可以填也可以不填！</p>
<p>请不要带着括号，以及括号内的说明文本，执行指令！</p>
</div>
<h3 id="普通玩家指令" tabindex="-1"><a class="header-anchor" href="#普通玩家指令" aria-hidden="true">#</a> 普通玩家指令 <Badge type="tip" text="公开" vertical="top" /></h3>
<table>
<thead>
<tr>
<th>指令名</th>
<th>功能说明</th>
<th>详细说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/buy (id) [数量]</code></td>
<td>购买物品</td>
<td>使用幸存币从商店购买物品</td>
</tr>
<tr>
<td><code v-pre>/buy v.(id)</code></td>
<td>购买载具</td>
<td>使用幸存币购买载具，v一定小写！</td>
</tr>
<tr>
<td><code v-pre>/cost (id)</code></td>
<td>查询价格</td>
<td>查询指定物品的幸存币价格</td>
</tr>
<tr>
<td><code v-pre>/sell (id)</code></td>
<td>回收指令(未开放)</td>
<td>回收指定物品</td>
</tr>
<tr>
<td><code v-pre>/kit (礼包名)</code></td>
<td>领取礼包</td>
<td>领取服务器礼包</td>
</tr>
<tr>
<td><code v-pre>/kits</code></td>
<td>查可领取礼包</td>
<td>查看服务器可领取礼包</td>
</tr>
<tr>
<td><code v-pre>/vkit (礼包名)</code></td>
<td>查指定礼包内容</td>
<td>查看指定礼包包含内容！</td>
</tr>
<tr>
<td><code v-pre>/tpa (玩家名)</code></td>
<td>传送至指定玩家</td>
<td>发送传送请求到指定玩家</td>
</tr>
<tr>
<td><code v-pre>/tpa a</code></td>
<td>接受玩家传送</td>
<td>接受玩家的传送请求</td>
</tr>
<tr>
<td><code v-pre>/tpa d</code></td>
<td>拒绝玩家传送</td>
<td>拒绝玩家的传送请求</td>
</tr>
<tr>
<td><code v-pre>/back</code></td>
<td>返回至死亡地点</td>
<td>传送至上次死亡地点</td>
</tr>
<tr>
<td><code v-pre>/home</code></td>
<td>传送回家</td>
<td>传送回绑定的床上！</td>
</tr>
<tr>
<td><code v-pre>/s</code></td>
<td>打开N币商店</td>
<td>打开N币商店开始消费！</td>
</tr>
<tr>
<td><code v-pre>/padd (id)</code> <code v-pre>/gadd (id)</code></td>
<td>存车指令</td>
<td>将载具存入云车库，面对他或者坐在车里，id处需要自定义！</td>
</tr>
<tr>
<td><code v-pre>/garagerieve (id)</code> <code v-pre>/gretrieve (id)</code> <code v-pre>/parkingretrieve (id)</code> <code v-pre>/pretrieve  (id)</code></td>
<td>取车指令</td>
<td>从云车库取出车辆，id为存入时自定义的！</td>
</tr>
<tr>
<td><code v-pre>/glist</code> <code v-pre>/plist</code></td>
<td>云车库列表</td>
<td>查看云车库车辆列表，打开ui操作界面</td>
</tr>
<tr>
<td><code v-pre>/gdelete (id)</code> <code v-pre>/pdelete (id)</code></td>
<td>删除车辆</td>
<td>从云车库中删除车辆</td>
</tr>
<tr>
<td><code v-pre>/vault [名称]</code></td>
<td>打开云背包</td>
<td>打开云背包，名称为指定云背包，空默认打开最大的！</td>
</tr>
<tr>
<td><code v-pre>/vaults</code></td>
<td>查看可用云背包</td>
<td>查看可用的云背包名称！</td>
</tr>
<tr>
<td><code v-pre>/unbox</code></td>
<td>打开开箱界面</td>
<td>开启开箱抽奖界面，开抽！</td>
</tr>
<tr>
<td><code v-pre>/godcar</code></td>
<td>设置车辆无敌</td>
<td>对车辆开启无敌，不掉血！</td>
</tr>
<tr>
<td><code v-pre>/vback (复原id)</code></td>
<td>载具恢复</td>
<td>对爆炸了的车辆进行花费一些幸存币将其恢复！</td>
</tr>
<tr>
<td><code v-pre>/vbl</code> <code v-pre>/vbackl``/vbacklist</code></td>
<td>爆炸车辆id列表</td>
<td>查看爆炸车辆id，选择要恢复的进行载具恢复！</td>
</tr>
<tr>
<td><code v-pre>/vtp</code></td>
<td>记录打捞车辆</td>
<td>记录入水车辆</td>
</tr>
<tr>
<td><code v-pre>/vtph</code></td>
<td>打捞车辆</td>
<td>将入水车辆打捞上岸！</td>
</tr>
<tr>
<td><code v-pre>/uchat</code></td>
<td>刷新头衔</td>
<td>刷新自己的头衔指令</td>
</tr>
</tbody>
</table>
<h3 id="会员专属指令" tabindex="-1"><a class="header-anchor" href="#会员专属指令" aria-hidden="true">#</a> 会员专属指令 <Badge type="warning" text="会员" vertical="top" /></h3>
<table>
<thead>
<tr>
<th>指令名</th>
<th>功能说明</th>
<th>详细说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/heal</code></td>
<td>恢复状态</td>
<td>将角色状态回满！</td>
</tr>
<tr>
<td><code v-pre>/tp (指定玩家名或地名)</code></td>
<td>传动到指定地点</td>
<td>传送指令，可强制传送至指定玩家，不需要对方同意，也可以进行地点传送</td>
</tr>
<tr>
<td><code v-pre>/god</code></td>
<td>无敌指令</td>
<td>设置自己成无敌状态！</td>
</tr>
<tr>
<td><code v-pre>/wtpa</code></td>
<td>地图定点传送</td>
<td>从地图中定点，传送到定点位置，可能会出现传送失败的情况！</td>
</tr>
<tr>
<td><code v-pre>/vanish</code></td>
<td>隐身指令</td>
<td>设置隐身状态，其他人就看不到你了！</td>
</tr>
<tr>
<td><code v-pre>/mi (id) [数量]</code></td>
<td>刷物品</td>
<td>仅可刷取原版物品</td>
</tr>
<tr>
<td><code v-pre>/mv (id)</code></td>
<td>刷载具</td>
<td>仅可刷取原版载具</td>
</tr>
<tr>
<td><code v-pre>/i (id) [数量]</code></td>
<td>刷物品</td>
<td>王者大杯及以上可用，可刷绝大部分物品！</td>
</tr>
<tr>
<td><code v-pre>/v (id)</code></td>
<td>刷载具</td>
<td>王者大杯及以上可用，仅可刷取绝大部分载具！</td>
</tr>
</tbody>
</table>
<h3 id="服管指令" tabindex="-1"><a class="header-anchor" href="#服管指令" aria-hidden="true">#</a> 服管指令 <Badge type="danger" text="管理" vertical="top" /></h3>
<table>
<thead>
<tr>
<th>指令名</th>
<th>功能说明</th>
<th>详细说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>/i (id) [数量]</code></td>
<td>刷物品</td>
<td>无限制的刷物品</td>
</tr>
<tr>
<td><code v-pre>/v (id)</code></td>
<td>刷载具</td>
<td>无限制的刷载具</td>
</tr>
</tbody>
</table>
<p>只展示部分指令！</p>
</div></template>


