<a name="0.9.1"></a>
## 0.9.1 (2016-02-15)


* added default for delta parameter in Engine.update, closes #200 ([490d232](https://github.com/liabru/matter-js/commit/490d232)), closes [#200](https://github.com/liabru/matter-js/issues/200)
* added docs for body.render.opacity ([adcb610](https://github.com/liabru/matter-js/commit/adcb610))
* added SVGPathSeg polyfill, closes #196 ([8fcb893](https://github.com/liabru/matter-js/commit/8fcb893)), closes [#196](https://github.com/liabru/matter-js/issues/196)
* Adding the opacity attribute to be able to draw semi-transarent sprites ([5b755a1](https://github.com/liabru/matter-js/commit/5b755a1))
* allow passing of pixi objects to Matter.RenderPixi at creation, closes #193 ([dbdabcc](https://github.com/liabru/matter-js/commit/dbdabcc)), closes [#193](https://github.com/liabru/matter-js/issues/193)
* change main reference in package.json ([633c305](https://github.com/liabru/matter-js/commit/633c305))
* Changed bounds checking MIN_VALUE to -MAX_VALUE. Fixes #202 ([dd5e260](https://github.com/liabru/matter-js/commit/dd5e260)), closes [#202](https://github.com/liabru/matter-js/issues/202)
* fix issue with Bodies.circle label option, closes #195 ([e7e8c26](https://github.com/liabru/matter-js/commit/e7e8c26)), closes [#195](https://github.com/liabru/matter-js/issues/195)
* fix lint issue ([b4e875b](https://github.com/liabru/matter-js/commit/b4e875b))
* fixed build issue ([bb3d43f](https://github.com/liabru/matter-js/commit/bb3d43f))
* fixed rendering of angle indicators ([aaffee3](https://github.com/liabru/matter-js/commit/aaffee3))
* fixed rendering of compound bodies ([99dd6c5](https://github.com/liabru/matter-js/commit/99dd6c5))
* fixes to body opacity rendering ([8ac06b2](https://github.com/liabru/matter-js/commit/8ac06b2))
* Merge branch 'master' of https://github.com/ma1069/matter-js into ma1069-master ([c99e6af](https://github.com/liabru/matter-js/commit/c99e6af))
* Merge pull request #199 from kevinboudot/master ([34fa27a](https://github.com/liabru/matter-js/commit/34fa27a))
* remove redundant console.log from gulpfile ([b5006e3](https://github.com/liabru/matter-js/commit/b5006e3))
* Update README.md ([1bfb758](https://github.com/liabru/matter-js/commit/1bfb758))
* updated edge build ([cc80837](https://github.com/liabru/matter-js/commit/cc80837))
* updated test refs ([cfdc0b3](https://github.com/liabru/matter-js/commit/cfdc0b3))
* updated test refs ([4d65dd1](https://github.com/liabru/matter-js/commit/4d65dd1))



<a name="0.9.0"></a>
# 0.9.0 (2016-01-16)

### release summary

* improved documentation
* improved performance
* improved stability
* improved accuracy
* improved friction
* improved sleeping
* improved constraints
* improved examples

* added concave body support
* added compound body support
* added collision filters
* added Matter.Body property setters
* added Matter.Sleeping events
* added Matter.Composite events
* added Matter.Composite transforms
* added Matter.MouseConstraint events
* added Matter.Render events
* added Matter.Runner
* added support for nodejs
* added support for high dpi rendering
* added multiple examples
* added automated tests

* migrated from grunt to gulp
* migrated to browserify
* migrated to pixi.js v3

* fixed multiple issues (see commit log)


### commit log

* Add Pixi DisplayObjectContainer to allow view bounds in webGL ([97f0f8d](https://github.com/liabru/matter-js/commit/97f0f8d))
* added beforeRender and afterRender events to Matter.Render ([aa48322](https://github.com/liabru/matter-js/commit/aa48322))
* added body sleepStart and sleepEnd events, closes #91 ([bc26469](https://github.com/liabru/matter-js/commit/bc26469)), closes [#91](https://github.com/liabru/matter-js/issues/91)
* added Body.nextCategory ([d249165](https://github.com/liabru/matter-js/commit/d249165))
* added Body.set ([235b6c8](https://github.com/liabru/matter-js/commit/235b6c8))
* added Body.setMass, Body.setDensity, Body.setInertia ([ca978fa](https://github.com/liabru/matter-js/commit/ca978fa))
* added Body.setPosition, Body.setAngle, Body.setVelocity, Body.setAngularVelocity ([7ed28f7](https://github.com/liabru/matter-js/commit/7ed28f7))
* added Body.setVertices and Vector.clone ([b6dbb25](https://github.com/liabru/matter-js/commit/b6dbb25))
* added building and contributing to readme ([9a59e34](https://github.com/liabru/matter-js/commit/9a59e34))
* added collisionFilter support to MouseConstraint ([cee8d55](https://github.com/liabru/matter-js/commit/cee8d55))
* added composite events ([2841522](https://github.com/liabru/matter-js/commit/2841522))
* added composite events example to Demo.events ([296d47e](https://github.com/liabru/matter-js/commit/296d47e))
* added Composite.translate, Composite.rotate, Composite.scale ([4c4962f](https://github.com/liabru/matter-js/commit/4c4962f))
* added compound support to Query.ray ([10e5d0f](https://github.com/liabru/matter-js/commit/10e5d0f))
* added constraint to Demo.compound ([87fbf51](https://github.com/liabru/matter-js/commit/87fbf51))
* added CONTRIBUTING.md ([7c936d5](https://github.com/liabru/matter-js/commit/7c936d5))
* added CONTRIBUTING.md ([261c794](https://github.com/liabru/matter-js/commit/261c794))
* added Demo.compositeManipulation ([4051823](https://github.com/liabru/matter-js/commit/4051823))
* added Demo.compound ([b7bf5d6](https://github.com/liabru/matter-js/commit/b7bf5d6))
* added Demo.concave, added Bodies.fromVertices, added Vertices.isConvex, fixed compound properties ([0b8efa5](https://github.com/liabru/matter-js/commit/0b8efa5))
* added Demo.manipulation ([0a453a2](https://github.com/liabru/matter-js/commit/0a453a2))
* added Demo.setManualControl ([203252a](https://github.com/liabru/matter-js/commit/203252a))
* added Demo.slingshot ([3043baa](https://github.com/liabru/matter-js/commit/3043baa))
* added Demo.staticFriction ([4491dfd](https://github.com/liabru/matter-js/commit/4491dfd))
* added Demo.svg, Demo.compoundStack, Demo.concave ([17589bc](https://github.com/liabru/matter-js/commit/17589bc))
* added Demo.terrain ([3132d70](https://github.com/liabru/matter-js/commit/3132d70))
* added docs ([200fcbe](https://github.com/liabru/matter-js/commit/200fcbe))
* added docs for engine.timing.isFixed ([e22ceeb](https://github.com/liabru/matter-js/commit/e22ceeb))
* added drag events to MouseConstraint, closes #45 ([c254c8d](https://github.com/liabru/matter-js/commit/c254c8d)), closes [#45](https://github.com/liabru/matter-js/issues/45)
* added early out in Constraint.postSolveAll, pass body.velocity when updating bounds ([8210dbe](https://github.com/liabru/matter-js/commit/8210dbe))
* added internal edge flagging to Bodies.fromVertices ([ca75fde](https://github.com/liabru/matter-js/commit/ca75fde))
* added Matter.Svg.pathToPoints ([7822ead](https://github.com/liabru/matter-js/commit/7822ead))
* added Matter.version ([e0a6de0](https://github.com/liabru/matter-js/commit/e0a6de0))
* added Matter.World extends  Matter.Composite to docs ([b3921fb](https://github.com/liabru/matter-js/commit/b3921fb))
* added minimum area check to Bodies.fromVertices ([bf11ee5](https://github.com/liabru/matter-js/commit/bf11ee5))
* added missing dependency to Render.js ([df5f16c](https://github.com/liabru/matter-js/commit/df5f16c))
* added mouse constraint collision mask example to demo ([440e9d2](https://github.com/liabru/matter-js/commit/440e9d2))
* added Mouse.create warning for omitted element ([af83e27](https://github.com/liabru/matter-js/commit/af83e27))
* added MouseConstraint.create warning for omitted element ([b6603ca](https://github.com/liabru/matter-js/commit/b6603ca))
* added node demo tests ([71c1ae8](https://github.com/liabru/matter-js/commit/71c1ae8))
* added options to Metrics.create ([1b7e27d](https://github.com/liabru/matter-js/commit/1b7e27d))
* added Query.point ([98ea7c7](https://github.com/liabru/matter-js/commit/98ea7c7))
* added release tasks ([5479fbc](https://github.com/liabru/matter-js/commit/5479fbc))
* added Render.create warning for omitted element ([0583cdb](https://github.com/liabru/matter-js/commit/0583cdb))
* added render.options.showMousePosition ([e191d44](https://github.com/liabru/matter-js/commit/e191d44))
* added Render.showInternalEdges, added rendering bounds + axes + positions for compounds, fixed rende ([5ab2bf3](https://github.com/liabru/matter-js/commit/5ab2bf3))
* added Render.vertexNumbers, Render.bodyConvexHulls ([9c139ed](https://github.com/liabru/matter-js/commit/9c139ed))
* added Runner.create and Runner.tick ([5c69f2e](https://github.com/liabru/matter-js/commit/5c69f2e))
* added source link to demo ([1e756d3](https://github.com/liabru/matter-js/commit/1e756d3))
* added sprite offsets relative to centre of mass, closes #153 ([3de9d00](https://github.com/liabru/matter-js/commit/3de9d00)), closes [#153](https://github.com/liabru/matter-js/issues/153)
* added startdrag and enddrag events to Demo.events ([7c75614](https://github.com/liabru/matter-js/commit/7c75614))
* added support for compound bodies in MouseConstraint ([d6829bf](https://github.com/liabru/matter-js/commit/d6829bf))
* added support for hidpi rendering ([4746eb9](https://github.com/liabru/matter-js/commit/4746eb9))
* added support for multiple vertices input in Bodies.fromVertices ([e8205f8](https://github.com/liabru/matter-js/commit/e8205f8))
* added support for sprite scale in RenderPixi, closes #54 ([8dea166](https://github.com/liabru/matter-js/commit/8dea166)), closes [#54](https://github.com/liabru/matter-js/issues/54)
* added testDemo to grunt test ([08c5648](https://github.com/liabru/matter-js/commit/08c5648))
* added time scaling to Sleeping ([0ae2d02](https://github.com/liabru/matter-js/commit/0ae2d02))
* added Vector.create ([b327a40](https://github.com/liabru/matter-js/commit/b327a40))
* Allow for negative force to bring a body out of sleeping state. ([d585e80](https://github.com/liabru/matter-js/commit/d585e80))
* appease jshint ([89140ae](https://github.com/liabru/matter-js/commit/89140ae))
* appease jshint ([18a2627](https://github.com/liabru/matter-js/commit/18a2627))
* change browser tests to use JSON.stringify ([75af920](https://github.com/liabru/matter-js/commit/75af920))
* change gravity scale to variable rather than a constant ([a38b227](https://github.com/liabru/matter-js/commit/a38b227))
* change main to edge build ([9d0e82b](https://github.com/liabru/matter-js/commit/9d0e82b))
* change travis to only lint rather than full test (until tests are finished and documented) ([ce478cb](https://github.com/liabru/matter-js/commit/ce478cb))
* change world.bounds to Infinity, remove world bounds check from Engine, closes #67 ([8b5192d](https://github.com/liabru/matter-js/commit/8b5192d)), closes [#67](https://github.com/liabru/matter-js/issues/67)
* changed Body._initProperties to use Body.setVertices ([2d04389](https://github.com/liabru/matter-js/commit/2d04389))
* changed bower main to build/matter.js ([7412335](https://github.com/liabru/matter-js/commit/7412335))
* changed certain Matter.Composite methods to private in docs ([8aa148d](https://github.com/liabru/matter-js/commit/8aa148d))
* changed Common.log to use console.warn ([c220f41](https://github.com/liabru/matter-js/commit/c220f41))
* changed default minimum area in Bodies.fromVertices ([998ab33](https://github.com/liabru/matter-js/commit/998ab33))
* changed demo to use Matter.Runner and Matter.Render events ([a1d4748](https://github.com/liabru/matter-js/commit/a1d4748))
* changed friction impulse limiting approach ([de4784c](https://github.com/liabru/matter-js/commit/de4784c))
* changed Grid.create to accept an options object ([eedd1f2](https://github.com/liabru/matter-js/commit/eedd1f2))
* changed jquery reference (matter-tools) to local copy ([0849773](https://github.com/liabru/matter-js/commit/0849773))
* changed Math.random to Common.random and use a seeded RNG ([0a46cb2](https://github.com/liabru/matter-js/commit/0a46cb2))
* changed Mouse.create to return as a plain object ([eaa9767](https://github.com/liabru/matter-js/commit/eaa9767))
* changed Render.bodyIds to show all parts ([3ed8034](https://github.com/liabru/matter-js/commit/3ed8034))
* changed Sleeping constants to be public (module level) ([7eadea9](https://github.com/liabru/matter-js/commit/7eadea9))
* changed vertex number render fillstyle ([bc88406](https://github.com/liabru/matter-js/commit/bc88406))
* changed Vertices.create and Vertices.fromPath to create and return a new array rather than apply in- ([e3e462e](https://github.com/liabru/matter-js/commit/e3e462e))
* cleanup ([5888ffc](https://github.com/liabru/matter-js/commit/5888ffc))
* cleanup Svg.pathToPoints ([8bf3278](https://github.com/liabru/matter-js/commit/8bf3278))
* cleanup Svg.pathToVertices ([7db3d28](https://github.com/liabru/matter-js/commit/7db3d28))
* demo tweaks ([d55c700](https://github.com/liabru/matter-js/commit/d55c700))
* demo tweaks ([22445c7](https://github.com/liabru/matter-js/commit/22445c7))
* disabled angle indicators on some demos ([74bc8ae](https://github.com/liabru/matter-js/commit/74bc8ae))
* don't calculate gravity force if there is no actual gravity ([e54802c](https://github.com/liabru/matter-js/commit/e54802c))
* dont draw offscreen constraints. Set visible flag on offscreen sprites ([e263ecb](https://github.com/liabru/matter-js/commit/e263ecb))
* Ensure passed canvas abides by render options ([0b51dd6](https://github.com/liabru/matter-js/commit/0b51dd6))
* expose demo instance externally ([a9122ed](https://github.com/liabru/matter-js/commit/a9122ed))
* fix angle indicators for compound bodies ([8031090](https://github.com/liabru/matter-js/commit/8031090))
* fix bug in Composites.stack when skipping bodies ([b34669e](https://github.com/liabru/matter-js/commit/b34669e))
* fix bug when using timing.isFixed, closes #44 ([0933620](https://github.com/liabru/matter-js/commit/0933620)), closes [#44](https://github.com/liabru/matter-js/issues/44)
* fix concat dependency ([84a22ba](https://github.com/liabru/matter-js/commit/84a22ba))
* fix demo for tests ([5e6b22b](https://github.com/liabru/matter-js/commit/5e6b22b))
* fix Demo.reset to fully reset ids ([500d566](https://github.com/liabru/matter-js/commit/500d566))
* fix Demo.stress stability ([d0fdd29](https://github.com/liabru/matter-js/commit/d0fdd29))
* Fix for travis ([05f1c46](https://github.com/liabru/matter-js/commit/05f1c46))
* fix grunt for travis ([d405910](https://github.com/liabru/matter-js/commit/d405910))
* fix grunt for travis ([f55d806](https://github.com/liabru/matter-js/commit/f55d806))
* fix gulp issues ([4173e70](https://github.com/liabru/matter-js/commit/4173e70))
* fix gulp issues ([3bd556d](https://github.com/liabru/matter-js/commit/3bd556d))
* fix handling of engine.render ([c46e915](https://github.com/liabru/matter-js/commit/c46e915))
* fix issue in Render.inspector on Chrome ([86fcfcd](https://github.com/liabru/matter-js/commit/86fcfcd))
* fix issue of undefined body.parts in constructor ([9d3755a](https://github.com/liabru/matter-js/commit/9d3755a))
* fix issue when Bodies.trapezoid slope === 1, closes #138 ([449774c](https://github.com/liabru/matter-js/commit/449774c)), closes [#138](https://github.com/liabru/matter-js/issues/138)
* fix issue with mouse when changing renderers, closes #96 ([796faeb](https://github.com/liabru/matter-js/commit/796faeb)), closes [#96](https://github.com/liabru/matter-js/issues/96)
* fix issue with Render.debug when no timing passed, closes #171 and #176 ([087fab2](https://github.com/liabru/matter-js/commit/087fab2)), closes [#171](https://github.com/liabru/matter-js/issues/171) [#176](https://github.com/liabru/matter-js/issues/176)
* fix jshint ([b0f72ab](https://github.com/liabru/matter-js/commit/b0f72ab))
* fix lint issue ([9a599f1](https://github.com/liabru/matter-js/commit/9a599f1))
* fix Matter.Demo for node ([2de1161](https://github.com/liabru/matter-js/commit/2de1161))
* fix Matter.Demo for node ([06eea3e](https://github.com/liabru/matter-js/commit/06eea3e))
* fix Matter.Runner for node ([ad55b85](https://github.com/liabru/matter-js/commit/ad55b85))
* fix mobile demo, remove dev.html, fix debug info rendering ([9d5c27a](https://github.com/liabru/matter-js/commit/9d5c27a))
* fix orientation event bug in DemoMobile ([f770a7c](https://github.com/liabru/matter-js/commit/f770a7c))
* fix pair properties for compounds ([b8f3784](https://github.com/liabru/matter-js/commit/b8f3784))
* fix runner for tests, limit precision of refs ([352bfd6](https://github.com/liabru/matter-js/commit/352bfd6))
* fix standalone option ([de16529](https://github.com/liabru/matter-js/commit/de16529))
* fix support for nodejs ([b669ea0](https://github.com/liabru/matter-js/commit/b669ea0))
* fix tests ([eccf0a7](https://github.com/liabru/matter-js/commit/eccf0a7))
* fix travis ([3ce6c3a](https://github.com/liabru/matter-js/commit/3ce6c3a))
* fix travis issue ([131ed5e](https://github.com/liabru/matter-js/commit/131ed5e))
* fix undefined variables, added jshint checks, closes #102 ([536e55f](https://github.com/liabru/matter-js/commit/536e55f)), closes [#102](https://github.com/liabru/matter-js/issues/102)
* fixed Body.rotate ([c5212e1](https://github.com/liabru/matter-js/commit/c5212e1))
* fixed Body.setVertices ([73ded98](https://github.com/liabru/matter-js/commit/73ded98))
* fixed bug in constraints for compounds ([13fcb4b](https://github.com/liabru/matter-js/commit/13fcb4b))
* fixed bug in Demo.reset that was creating multiple MouseConstraint ([8204d97](https://github.com/liabru/matter-js/commit/8204d97))
* fixed build tasks ([69ff33f](https://github.com/liabru/matter-js/commit/69ff33f))
* fixed build tasks, closes #161 ([d1b8705](https://github.com/liabru/matter-js/commit/d1b8705)), closes [#161](https://github.com/liabru/matter-js/issues/161)
* fixed chaining for some Matter.Vertices methods ([8746185](https://github.com/liabru/matter-js/commit/8746185))
* fixed collision detection issue, closes #12 ([3e48825](https://github.com/liabru/matter-js/commit/3e48825)), closes [#12](https://github.com/liabru/matter-js/issues/12)
* fixed collision incident and reference body mapping ([757fffa](https://github.com/liabru/matter-js/commit/757fffa))
* fixed collision rendering ([bc9a051](https://github.com/liabru/matter-js/commit/bc9a051))
* fixed Common.now, closes #55 ([8555c0c](https://github.com/liabru/matter-js/commit/8555c0c)), closes [#55](https://github.com/liabru/matter-js/issues/55)
* fixed compound body stability, improved position resolver ([e01dd22](https://github.com/liabru/matter-js/commit/e01dd22))
* fixed critical inertia calculation issue, a potential breaking change, so Body._inertiaScale added t ([9a55b0c](https://github.com/liabru/matter-js/commit/9a55b0c))
* fixed Example.timescale ([19656cd](https://github.com/liabru/matter-js/commit/19656cd))
* fixed friction in Demo.manipulation ([95ae911](https://github.com/liabru/matter-js/commit/95ae911))
* fixed gulp shell task args ([c2b0f30](https://github.com/liabru/matter-js/commit/c2b0f30))
* fixed incorrect bounds issue when passing angle in Body.create ([810bd26](https://github.com/liabru/matter-js/commit/810bd26))
* fixed issue with Body.applyForce torque, closes #64 ([3f9364c](https://github.com/liabru/matter-js/commit/3f9364c)), closes [#64](https://github.com/liabru/matter-js/issues/64)
* fixed issue with docs ([3a16f90](https://github.com/liabru/matter-js/commit/3a16f90))
* fixed issue with MouseConstraint.create, closes #185 ([dff0e30](https://github.com/liabru/matter-js/commit/dff0e30)), closes [#185](https://github.com/liabru/matter-js/issues/185)
* fixed issues with friction stability ([1db98a3](https://github.com/liabru/matter-js/commit/1db98a3))
* Fixed missed variable declaration. ([a940d96](https://github.com/liabru/matter-js/commit/a940d96))
* fixed options pass through on Bodies.fromVertices ([eb29367](https://github.com/liabru/matter-js/commit/eb29367))
* fixed Query.ray, Number.MIN_VALUE seems to cause SAT.collides to fail ([ccbb98b](https://github.com/liabru/matter-js/commit/ccbb98b))
* fixed RenderPixi for compound bodies ([6679b9c](https://github.com/liabru/matter-js/commit/6679b9c))
* fixed SAT overlap calculation for containment case ([685f2bd](https://github.com/liabru/matter-js/commit/685f2bd))
* fixed scaling on RenderPixi view bounds ([c1964e2](https://github.com/liabru/matter-js/commit/c1964e2))
* fixed support finding logic ([bc7dfc7](https://github.com/liabru/matter-js/commit/bc7dfc7))
* fixed Vertices.fromPath when parsing scientific notation ([dae684d](https://github.com/liabru/matter-js/commit/dae684d))
* fixes for compound bodies ([87f9065](https://github.com/liabru/matter-js/commit/87f9065))
* formatting merge ([d4cbdbb](https://github.com/liabru/matter-js/commit/d4cbdbb))
* further work on compound implementation ([d2f79b4](https://github.com/liabru/matter-js/commit/d2f79b4))
* hide axis indicator on compound bodies ([6a26696](https://github.com/liabru/matter-js/commit/6a26696))
* ignoring .idea ([066a416](https://github.com/liabru/matter-js/commit/066a416))
* implemented automated browser tests ([a88b3ba](https://github.com/liabru/matter-js/commit/a88b3ba))
* implemented compound bodies, added Body.setParts ([f554d6c](https://github.com/liabru/matter-js/commit/f554d6c))
* implemented static compound bodies ([90adf14](https://github.com/liabru/matter-js/commit/90adf14))
* implemented temporary vector pool ([7a477f2](https://github.com/liabru/matter-js/commit/7a477f2))
* improve Composite.car ([5ff2182](https://github.com/liabru/matter-js/commit/5ff2182))
* improved collision detection for compounds ([84d9f59](https://github.com/liabru/matter-js/commit/84d9f59))
* improved Demo.manipulation ([e186ccd](https://github.com/liabru/matter-js/commit/e186ccd))
* improved docs ([2317f02](https://github.com/liabru/matter-js/commit/2317f02))
* improved docs ([2e6afd4](https://github.com/liabru/matter-js/commit/2e6afd4))
* improved examples ([6e1f8e9](https://github.com/liabru/matter-js/commit/6e1f8e9))
* improved friction, added body.frictionStatic ([937c7bf](https://github.com/liabru/matter-js/commit/937c7bf))
* improved traction for Composites.car ([95eddb0](https://github.com/liabru/matter-js/commit/95eddb0))
* increased tollerance on internal edge finding ([40905e8](https://github.com/liabru/matter-js/commit/40905e8))
* initial work on browser tests ([6a88256](https://github.com/liabru/matter-js/commit/6a88256))
* initial work on compound bodies ([243fce4](https://github.com/liabru/matter-js/commit/243fce4))
* Make background:'transparent' work like canvas renderer ([f9123f9](https://github.com/liabru/matter-js/commit/f9123f9))
* Merge branch 'browser-tests' ([a6b82c1](https://github.com/liabru/matter-js/commit/a6b82c1))
* Merge branch 'collision-filters' of https://github.com/GustavCarlson/matter-js into GustavCarlson-co ([3a32bda](https://github.com/liabru/matter-js/commit/3a32bda))
* Merge branch 'GustavCarlson-collision-filters' ([a58fe2a](https://github.com/liabru/matter-js/commit/a58fe2a))
* Merge branch 'master' into runner-improve ([a48d219](https://github.com/liabru/matter-js/commit/a48d219))
* Merge branch 'master' into topic/addBounds ([a461fc7](https://github.com/liabru/matter-js/commit/a461fc7))
* Merge branch 'master' of github.com:liabru/matter-js ([4067108](https://github.com/liabru/matter-js/commit/4067108))
* Merge branch 'master' of https://github.com/rfoligno/matter-js into rfoligno-master ([41b4b7f](https://github.com/liabru/matter-js/commit/41b4b7f))
* Merge branch 'master' of https://github.com/schahriar/matter-js into schahriar-master ([2510cdf](https://github.com/liabru/matter-js/commit/2510cdf))
* Merge branch 'no-gravity-optim' of https://github.com/BlackDice/matter-js into BlackDice-no-gravity- ([1b8574a](https://github.com/liabru/matter-js/commit/1b8574a))
* Merge branch 'node-tests' into browserify ([6e0e7e4](https://github.com/liabru/matter-js/commit/6e0e7e4))
* Merge branch 'pr/60' ([42dc72d](https://github.com/liabru/matter-js/commit/42dc72d))
* Merge branch 'pr/95' ([eed9167](https://github.com/liabru/matter-js/commit/eed9167))
* Merge branch 'runner-improve' into browserify ([9e3438f](https://github.com/liabru/matter-js/commit/9e3438f))
* Merge pull request #30 from mrspeaker/master ([e95e328](https://github.com/liabru/matter-js/commit/e95e328))
* Merge pull request #31 from mrspeaker/topic/addBounds ([6652bb4](https://github.com/liabru/matter-js/commit/6652bb4))
* Merge pull request #51 from tumult/pair_refreshes_from_body_values ([7c1efb6](https://github.com/liabru/matter-js/commit/7c1efb6))
* Merge remote-tracking branch 'origin/pr/33' ([c6a9414](https://github.com/liabru/matter-js/commit/c6a9414))
* merge tumult:old_ie_fixes + tweaks ([6e1ab9a](https://github.com/liabru/matter-js/commit/6e1ab9a))
* migrated from grunt to gulp, jshint to eslint ([19bb655](https://github.com/liabru/matter-js/commit/19bb655))
* Missing argument whose default is 1. ([61855ab](https://github.com/liabru/matter-js/commit/61855ab))
* More fine-grained collision filtering in the style of Box2D ([dd4fc65](https://github.com/liabru/matter-js/commit/dd4fc65))
* move /tests to /test ([ad403ae](https://github.com/liabru/matter-js/commit/ad403ae))
* move Demo.* to Example.* ([b722012](https://github.com/liabru/matter-js/commit/b722012))
* move license in build ([9ba8a2a](https://github.com/liabru/matter-js/commit/9ba8a2a))
* move require statements below module export ([99c3bb3](https://github.com/liabru/matter-js/commit/99c3bb3))
* moved collision events into Engine.update, changed collisionStart to trigger before collisions resol ([69b1d05](https://github.com/liabru/matter-js/commit/69b1d05))
* moved Engine.run to Matter.Runner ([6911395](https://github.com/liabru/matter-js/commit/6911395))
* moved engine.timing properties, tick events and Engine.render into Matter.Runner module ([dcdc43d](https://github.com/liabru/matter-js/commit/dcdc43d))
* pass width and height options to Pixi webGL renderer ([a9278fc](https://github.com/liabru/matter-js/commit/a9278fc))
* publish to npm ([a12fbcb](https://github.com/liabru/matter-js/commit/a12fbcb))
* refactor Bodies.fromVertices ([4a2c6e7](https://github.com/liabru/matter-js/commit/4a2c6e7))
* refactor Demo.create ([c0b24da](https://github.com/liabru/matter-js/commit/c0b24da))
* refactor Demo.init ([fb76605](https://github.com/liabru/matter-js/commit/fb76605))
* remove constraint torque clamp ([6f89250](https://github.com/liabru/matter-js/commit/6f89250))
* removed Body.resetForcesAll, removed Body.applyGravityAll, removed Body.updateAll ([9aa0945](https://github.com/liabru/matter-js/commit/9aa0945))
* removed collision.supportCorrected instead using bodyB.position, added render.options.showSeparation ([2b6a8d3](https://github.com/liabru/matter-js/commit/2b6a8d3))
* removed complexity check in Bodies.fromVertices, enforce clockwise sort ([2d1ef0d](https://github.com/liabru/matter-js/commit/2d1ef0d))
* removed Detector.bruteForce ([e04de5f](https://github.com/liabru/matter-js/commit/e04de5f))
* removed engine.broadphase.current, removed engine.broadphase.instance, changed engine.broadphase to  ([6dd0c05](https://github.com/liabru/matter-js/commit/6dd0c05))
* removed engine.input, removed Engine mouse events, added MouseConstraint mouse events ([fb5d899](https://github.com/liabru/matter-js/commit/fb5d899))
* removed line width change from Body.setStatic ([04955bb](https://github.com/liabru/matter-js/commit/04955bb))
* removed Matter.Metrics from release builds (now dev only) ([968bba2](https://github.com/liabru/matter-js/commit/968bba2))
* removed old build ([a068bec](https://github.com/liabru/matter-js/commit/a068bec))
* removed redundant property ([14392b4](https://github.com/liabru/matter-js/commit/14392b4))
* removed Render.clear (redundant) ([0a15d7d](https://github.com/liabru/matter-js/commit/0a15d7d))
* removed Render.setBackground (now use render.options) ([01bc813](https://github.com/liabru/matter-js/commit/01bc813))
* removed unused vars from examples ([0bff037](https://github.com/liabru/matter-js/commit/0bff037))
* removed version number from edge build name ([e6b998e](https://github.com/liabru/matter-js/commit/e6b998e))
* render normals pointing out of static bodies ([d082b3a](https://github.com/liabru/matter-js/commit/d082b3a))
* skip presolve when impulse 0 ([296059c](https://github.com/liabru/matter-js/commit/296059c))
* skip unnecessary loops in Composites.mesh, closes #85 ([0a73a64](https://github.com/liabru/matter-js/commit/0a73a64)), closes [#85](https://github.com/liabru/matter-js/issues/85)
* Some fixes in pixi.js v3 update ([96735dd](https://github.com/liabru/matter-js/commit/96735dd))
* Spellchecking ([940976a](https://github.com/liabru/matter-js/commit/940976a))
* Spellchecking ([c2e0c23](https://github.com/liabru/matter-js/commit/c2e0c23))
* Spellchecking ([cd5d401](https://github.com/liabru/matter-js/commit/cd5d401))
* Spellchecking ([611a429](https://github.com/liabru/matter-js/commit/611a429))
* Spellchecking ([723ddcf](https://github.com/liabru/matter-js/commit/723ddcf))
* Spellchecking ([65d5d93](https://github.com/liabru/matter-js/commit/65d5d93))
* Spellchecking ([3127654](https://github.com/liabru/matter-js/commit/3127654))
* tweak jshint ([71df1b9](https://github.com/liabru/matter-js/commit/71df1b9))
* tweaks to collision filtering ([5060c76](https://github.com/liabru/matter-js/commit/5060c76))
* tweaks to Matter.Runner ([ce474da](https://github.com/liabru/matter-js/commit/ce474da))
* Update JSDoc ([25ab2a3](https://github.com/liabru/matter-js/commit/25ab2a3))
* Update JSDoc ([18e0642](https://github.com/liabru/matter-js/commit/18e0642))
* Update JSDoc ([71ef6c2](https://github.com/liabru/matter-js/commit/71ef6c2))
* Update JSDoc ([10a46b7](https://github.com/liabru/matter-js/commit/10a46b7))
* Update JSDoc ([5b87f47](https://github.com/liabru/matter-js/commit/5b87f47))
* Update JSDoc ([d17eb6c](https://github.com/liabru/matter-js/commit/d17eb6c))
* Update JSDoc ([aa3eabc](https://github.com/liabru/matter-js/commit/aa3eabc))
* update node version for travis ([e698b6b](https://github.com/liabru/matter-js/commit/e698b6b))
* updated browser test refs ([1810f93](https://github.com/liabru/matter-js/commit/1810f93))
* updated browser test refs ([ae32d63](https://github.com/liabru/matter-js/commit/ae32d63))
* updated browser test refs ([31fb748](https://github.com/liabru/matter-js/commit/31fb748))
* updated contributing notes ([8b89e87](https://github.com/liabru/matter-js/commit/8b89e87))
* updated docs for collisionFilter ([9f10f88](https://github.com/liabru/matter-js/commit/9f10f88))
* updated edge build ([2fa1570](https://github.com/liabru/matter-js/commit/2fa1570))
* updated edge build ([02ab198](https://github.com/liabru/matter-js/commit/02ab198))
* updated edge build ([37a86cd](https://github.com/liabru/matter-js/commit/37a86cd))
* updated edge build ([cd00353](https://github.com/liabru/matter-js/commit/cd00353))
* updated edge build ([37ccc84](https://github.com/liabru/matter-js/commit/37ccc84))
* updated edge build ([bf3f986](https://github.com/liabru/matter-js/commit/bf3f986))
* updated edge build ([16733ad](https://github.com/liabru/matter-js/commit/16733ad))
* updated edge build ([2f2d416](https://github.com/liabru/matter-js/commit/2f2d416))
* updated edge build ([5770013](https://github.com/liabru/matter-js/commit/5770013))
* updated edge build ([43fd2e3](https://github.com/liabru/matter-js/commit/43fd2e3))
* updated edge build ([fbb7c1a](https://github.com/liabru/matter-js/commit/fbb7c1a))
* updated edge build ([d6cbd07](https://github.com/liabru/matter-js/commit/d6cbd07))
* updated edge build ([9561d5d](https://github.com/liabru/matter-js/commit/9561d5d))
* updated edge build ([a80fbc1](https://github.com/liabru/matter-js/commit/a80fbc1))
* updated edge build ([5b2b060](https://github.com/liabru/matter-js/commit/5b2b060))
* updated edge build ([d22b1b4](https://github.com/liabru/matter-js/commit/d22b1b4))
* updated edge build ([2ab20b0](https://github.com/liabru/matter-js/commit/2ab20b0))
* updated edge build ([f2635ab](https://github.com/liabru/matter-js/commit/f2635ab))
* updated matter-tools ([c969767](https://github.com/liabru/matter-js/commit/c969767))
* updated matter-tools ([4ecad0f](https://github.com/liabru/matter-js/commit/4ecad0f))
* updated node test refs ([b1e6a45](https://github.com/liabru/matter-js/commit/b1e6a45))
* Updated pixi.js to v3 ([419d2ad](https://github.com/liabru/matter-js/commit/419d2ad))
* updated readme ([137580c](https://github.com/liabru/matter-js/commit/137580c))
* updated readme ([f4f3bf7](https://github.com/liabru/matter-js/commit/f4f3bf7))
* updated readme ([d2dcc77](https://github.com/liabru/matter-js/commit/d2dcc77))
* updated readme ([2806fd3](https://github.com/liabru/matter-js/commit/2806fd3))
* updated readme ([3e5abab](https://github.com/liabru/matter-js/commit/3e5abab))
* updated readme ([8f2f8ee](https://github.com/liabru/matter-js/commit/8f2f8ee))
* updated readme ([6cd00b1](https://github.com/liabru/matter-js/commit/6cd00b1))
* updated test refs ([b79ece2](https://github.com/liabru/matter-js/commit/b79ece2))
* updated test refs ([1a55259](https://github.com/liabru/matter-js/commit/1a55259))
* updated test refs ([110aea8](https://github.com/liabru/matter-js/commit/110aea8))
* updated test refs ([729e2bf](https://github.com/liabru/matter-js/commit/729e2bf))
* upgraded pixi.js to v3.0.6 ([d03145e](https://github.com/liabru/matter-js/commit/d03145e))
* use actual canvas size for default render bounds ([c3129b8](https://github.com/liabru/matter-js/commit/c3129b8))
* use browserify ([00251e5](https://github.com/liabru/matter-js/commit/00251e5))
* use build folder for demo ([fa47d5c](https://github.com/liabru/matter-js/commit/fa47d5c))
* use different port for test server, fix test precision limiter ([c1f71b9](https://github.com/liabru/matter-js/commit/c1f71b9))
* Use own Common.indexOf method for IE 6-8 compatibility ([b91af36](https://github.com/liabru/matter-js/commit/b91af36))
* When updating pairs use current values from bodies as they may have changed ([f0e7491](https://github.com/liabru/matter-js/commit/f0e7491))



# Matter.js Changelog

[brm.io/matter-js](http://brm.io/matter-js)

----------

## 0.8.0-alpha - 2014-05-05

#### Release Highlights

- added [Views](http://brm.io/matter-js-demo/#views) demo
- added [Time Scaling](http://brm.io/matter-js-demo/#timescale) demo
- added [Rounded Corners (Chamfering)](http://brm.io/matter-js-demo#rounded) demo
- added [Raycasting](http://brm.io/matter-js-demo/#raycasting) demo
- added Query module, including raycasting
- added 3 useful new Composite methods
- added support for mouse wheel, mouse scaling and offsets
- added Body.scale for scaling bodies on the fly
- added Body.timeScale for slowing down bodies per-body
- added Body.setStatic for correctly setting static
- added Vertices.chamfer for rounding corners of any set of vertices
- added integration of chamfer to body factories
- added engine.timing.isFixed option to disable dynamic timing
- added render.bounds for translating and scaling views
- easier use of Engine.update and Engine.render for those using custom game loops
- fixed issues with time scaling
- fixed error in calculation of centre of mass
- removed Matter.Gui in preparation for the [MatterTools](https://github.com/liabru/matter-tools) project launch

#### Added

- added Demo.views
- added Demo.timescale
- added Demo.rounded
- added Demo.raycasting
- added demo support for hash + '-inspect' to start the [MatterTools](https://github.com/liabru/matter-tools) inspector
- added Composite.rebase
- added Composite.move
- added Composite.get
- added Matter.Query
- added Query.ray
- added Query.region
- added Bounds.translate
- added Bounds.shift
- added Mouse.setScale
- added Mouse.setPosition
- added mouse.absolute
- added mouse.wheelDelta
- added mouse.offset
- added Body.setStatic
- added Body.scale
- added body.timeScale
- added Vector.angle
- added Vertices.chamfer for rounding corners
- added Engine.render
- added engine.timing.isFixed option
- added render.bounds for translating and scaling views
- added Common.nextId
- added body.label
- added constraint.label
- added composite.label

#### Changed

- changed engine.timing.timestamp to be simulation based rather than wall-clock based
- changed correction to now be optional in Engine.update (defaults to 1)
- changed Events.on to return callback
- changed Events.off to accept callbacks for removal
- changed vertices in Bounds.create to optional
- changed engine.timeScale to engine.timing.timeScale
- moved Matter.Inspector and Matter.Gui to the [MatterTools](https://github.com/liabru/matter-tools) project
- moved event documentation to end of file for clarity
- moved respective engine event triggers into Engine.update and Engine.render

#### Removed

- removed body.render.path (redundant)
- removed Body.nextId
- removed Constraint.nextId
- removed Composite.nextId
- removed Body.updateProperties (now a private method)

#### Fixed

- fixed issues with timing.timeScale
- fixed constraints now account for timeScale
- fixed Vertices.centre calculation to get correct centre of mass

## 0.7.0-alpha - 2014-04-01

#### Release Highlights

- added six new demos
	- all demos are now mobile friendly
- added new event system
	- engine, mouse and collision events
- added sprite texture rendering support
- added WebGL renderer (pixi.js)
- improved `Composite` (and `World`)
	- batch adding
	- type agnostic adding
	- body removal
- major performance increases all round
	- collision detection caching
	- batched rendering
	- improved pair management
	- memory leaks fixed
- stability improvements
	- bodies rest better due to collision caching
	- bodies sleep better
	- constraints are much less volatile
- fixes for a number of issues (see fixes)

#### Added

- added demos 
	- sprites
	- events
	- catapult
	- cloth
	- soft body
	- bridge
- added collision caching and reuse for improved performance
	- added metrics for collision reuse
- added `Events` module ([Issue #8](https://github.com/liabru/matter-js/issues/8))
	- engine events
	- mouse events
	- collision events
- added composite functions, including
	- batch adding (`Composite.add` / `World.add`)
	- type agnostic adding (`Composite.add` / `World.add`)
	- body removal (`Composite.remove` / `World.remove`)
- added factory functions
	- constraint meshing (`Composites.mesh`)
	- soft body factory (`Composites.softBody`)
- added `RenderPixi`, a pixi.js WebGL renderer
	- added `Gui` option to switch renderer
	- added `Mouse.setElement`
- added `render.visible` flag to `Body` and `Constraint` ([Issue #10](https://github.com/liabru/matter-js/issues/10))
- added `id` to `Constraint` and `Composite`
- added `type` names to `Body`, `Constraint`, `Composite`
- added `Common` functions
	- `Common.colorToNumber`
	- `Common.log`
	- `Common.clone`
- added jsdoc annotations
- added travis-ci integration
- added yuidoc build tasks
- added multiple build modes to `Gruntfile` (dev, release, edge)
- added repository to `package.json`, so Browserify may be used
- added `CHANGELOG.md`

#### Changed

- renamed module `Manager` to `Pairs`
- changed `Composite` to be tree-based
- changed timestep to be smoothed over 1s for stability
- changed default `constraintIterations` to 2 for stability
- changed demo to use the new composite functions
- changed right click to now remove bodies in the demos
- changed `Common.now` to use high-resolution timing
- changed `MouseConstraint` to reference a single constraint rather than a list
- changed `Constraint` to now use a `render` property
- changed `Metrics` to only track FPS by default, use the `extended` flag for full metrics

#### Removed

- removed the default in `MouseConstraint`, you must now instantiate one manually

#### Fixed

- fixed a memory leak in `Grid`
- fixed a memory leak in `Manager`
- fixed debug text now uses `Metrics` correctly
- fixed issues regarding passing custom `Render` modules ([Issue #7](https://github.com/liabru/matter-js/issues/7))
- fixed issue in `Common.extend` with `null` properties
- fixed issue with sleeping, now ignores inactive pairs
- fixed issues with `Body.applyForce` ([Issue #7](https://github.com/liabru/matter-js/issues/7))

## 0.5.0-alpha - 2014-02-28

- initial release