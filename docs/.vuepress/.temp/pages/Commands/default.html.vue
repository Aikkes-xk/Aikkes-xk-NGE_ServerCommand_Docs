<template><div><h1 id="基础指令" tabindex="-1"><a class="header-anchor" href="#基础指令" aria-hidden="true">#</a> 基础指令</h1>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>本指令表仅限于[NGE]旗下服务器！</p>
<p>具体适用服务器会在下方进行标注！</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">特别注意</p>
<p>(括号)中的内容，需要根据内容替换为你要查询或者使用的内容！</p>
<p>[方括号]中的内容，是可选项目，就是可以填也可以不填！</p>
<p>请不要带着括号，以及括号内的说明文本，执行指令！</p>
</div>
<h2 id="幸存币-f币商店-商店指令" tabindex="-1"><a class="header-anchor" href="#幸存币-f币商店-商店指令" aria-hidden="true">#</a> 幸存币/F币商店 商店指令 <Badge type="tip" text="公开" vertical="top" /></h2>
<p>一个用于在服务器中使用幸存币/F币 进行商品买卖的指令！</p>
<p>指令适用于：<code v-pre>[NGE]幸存者全服，FuryX全服</code></p>
<p>可用人群：<code v-pre>所有玩家</code></p>
<h3 id="购买物品指令" tabindex="-1"><a class="header-anchor" href="#购买物品指令" aria-hidden="true">#</a> 购买物品指令</h3>
<p>指令： <code v-pre>/buy (id) [数量可选]</code></p>
<p>使用方法：
<img src="/imag/buy1.png" alt="购买方法"></p>
<p>参考上图，最后数量可以省略，省略后默认为1个！</p>
<p>省略后的样式如下图
<img src="/imag/buy2.png" alt="省略"></p>
<p>点击回车完成购买
<img src="/imag/buy3.png" alt="完成"></p>
<p>物品不出售会提示下面内容</p>
<p><img src="/imag/buyerror.png" alt="不存在"></p>
<h3 id="购买载具指令" tabindex="-1"><a class="header-anchor" href="#购买载具指令" aria-hidden="true">#</a> 购买载具指令</h3>
<p>指令： <code v-pre>/buy v.(id)</code></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>请注意这里V要小写，点为英文模式下的. 否则可能会出现异常情况！</p>
</div>
<p>使用方法：
<img src="/imag/buy4.png" alt="购买方法"></p>
<p><img src="/imag/buy5.png" alt="购买成功"></p>
<h3 id="查询指令" tabindex="-1"><a class="header-anchor" href="#查询指令" aria-hidden="true">#</a> 查询指令</h3>
<p>指令： <code v-pre>/cost (物品id)</code></p>
<p>使用方法：
<img src="/imag/cost1.png" alt="使用方法1"></p>
<p><img src="/imag/cost2.png" alt="使用方法2"></p>
<h3 id="回收指令" tabindex="-1"><a class="header-anchor" href="#回收指令" aria-hidden="true">#</a> 回收指令</h3>
<p>指令： <code v-pre>/sell (要回收的物品id)</code></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>目前回收指令并没有开放使用，目前幸存者和furyx全服均不可用！</p>
</div>
<p>使用指令后会在背包中扣除一个指定id物品，并给予幸存币/f币！</p>
<h2 id="礼包指令" tabindex="-1"><a class="header-anchor" href="#礼包指令" aria-hidden="true">#</a> 礼包指令 <Badge type="tip" text="公开" vertical="top" /></h2>
<p>在服务器中可以领取指定礼包，例如新手礼包，各种补偿礼包等！</p>
<p>指令适用于：<code v-pre>[NGE]幸存者全服，FuryX全服</code></p>
<p>可用人群：<code v-pre>所有玩家</code></p>
<h3 id="领取礼包指令" tabindex="-1"><a class="header-anchor" href="#领取礼包指令" aria-hidden="true">#</a> 领取礼包指令</h3>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>部分礼包为周期领取，有冷却时间，少部分为一次性礼包！</p>
</div>
<p>指令： <code v-pre>/kit (礼包名)</code></p>
<p>领取新手礼包，等各种礼包!</p>
<h3 id="可领取礼包" tabindex="-1"><a class="header-anchor" href="#可领取礼包" aria-hidden="true">#</a> 可领取礼包</h3>
<p>指令： <code v-pre>/kits</code></p>
<p>显示全部可以领取的礼包的名称！</p>
<h3 id="礼包内容" tabindex="-1"><a class="header-anchor" href="#礼包内容" aria-hidden="true">#</a> 礼包内容</h3>
<p>指令： <code v-pre>/vkit (礼包名)</code></p>
<p>查询礼包内包含内容！</p>
<h2 id="传送tp指令" tabindex="-1"><a class="header-anchor" href="#传送tp指令" aria-hidden="true">#</a> 传送tp指令 <Badge type="tip" text="公开" vertical="top" /></h2>
<p>使用指令可以传送到服务器的任意玩家处！但需要对方同意传送！</p>
<p>指令适用于：<code v-pre>[NGE]幸存者全服，FuryX全服</code></p>
<p>可用人群：<code v-pre>所有玩家</code></p>
<h3 id="发送传送请求" tabindex="-1"><a class="header-anchor" href="#发送传送请求" aria-hidden="true">#</a> 发送传送请求</h3>
<p>指令： <code v-pre>/tpa (玩家名或简写 例如：玩家全名星空-xk 简写可以写xk或者星空)</code></p>
<p>请求传送到指定玩家，需要对方同意！可使用名称简写或steam17位id，进行精准传送！</p>
<p><img src="/imag/tpa1.png" alt="使用方法1"></p>
<p>对方同意传送，你会被传送至对方身边!</p>
<p><img src="/imag/tpa4.png" alt="使用方法2"></p>
<p>对方拒绝传送,对方拒绝了你的传送请求！</p>
<p><img src="/imag/tpa6.png" alt="使用方法3"></p>
<h3 id="接受传送请求" tabindex="-1"><a class="header-anchor" href="#接受传送请求" aria-hidden="true">#</a> 接受传送请求</h3>
<p>指令： <code v-pre>/tpa a</code></p>
<p>接受对面传送请求！</p>
<p><img src="/imag/tpa2.png" alt="使用方法4"></p>
<h3 id="拒绝传送请求" tabindex="-1"><a class="header-anchor" href="#拒绝传送请求" aria-hidden="true">#</a> 拒绝传送请求</h3>
<p>指令： <code v-pre>/tpa d</code></p>
<p>拒绝对方传送请求</p>
<p><img src="/imag/tpa3.png" alt="使用方法5"></p>
</div></template>


