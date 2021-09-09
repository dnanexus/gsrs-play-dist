@REM ginas launcher script
@REM
@REM Environment:
@REM JAVA_HOME - location of a JDK home dir (optional if java on path)
@REM CFG_OPTS  - JVM options (optional)
@REM Configuration:
@REM GINAS_config.txt found in the GINAS_HOME.
@setlocal enabledelayedexpansion

@echo off
if "%GINAS_HOME%"=="" set "GINAS_HOME=%~dp0\\.."
set ERROR_CODE=0

set "APP_LIB_DIR=%GINAS_HOME%\lib\"

rem Detect if we were double clicked, although theoretically A user could
rem manually run cmd /c
for %%x in (%cmdcmdline%) do if %%~x==/c set DOUBLECLICKED=1

rem FIRST we load the config file of extra options.
set "CFG_FILE=%GINAS_HOME%\GINAS_config.txt"
set CFG_OPTS=
if exist %CFG_FILE% (
  FOR /F "tokens=* eol=# usebackq delims=" %%i IN ("%CFG_FILE%") DO (
    set DO_NOT_REUSE_ME=%%i
    rem ZOMG (Part #2) WE use !! here to delay the expansion of
    rem CFG_OPTS, otherwise it remains "" for this loop.
    set CFG_OPTS=!CFG_OPTS! !DO_NOT_REUSE_ME!
  )
)

rem We use the value of the JAVACMD environment variable if defined
set _JAVACMD=%JAVACMD%

if "%_JAVACMD%"=="" (
  if not "%JAVA_HOME%"=="" (
    if exist "%JAVA_HOME%\bin\java.exe" set "_JAVACMD=%JAVA_HOME%\bin\java.exe"
  )
)

if "%_JAVACMD%"=="" set _JAVACMD=java

rem Detect if this java is ok to use.
for /F %%j in ('"%_JAVACMD%" -version  2^>^&1') do (
  if %%~j==Java set JAVAINSTALLED=1
)

rem BAT has no logical or, so we do it OLD SCHOOL! Oppan Redmond Style
set JAVAOK=true
if not defined JAVAINSTALLED set JAVAOK=false

if "%JAVAOK%"=="false" (
  echo.
  echo A Java JDK is not installed or can't be found.
  if not "%JAVA_HOME%"=="" (
    echo JAVA_HOME = "%JAVA_HOME%"
  )
  echo.
  echo Please go to
  echo   http://www.oracle.com/technetwork/java/javase/downloads/index.html
  echo and download a valid Java JDK and install before running ginas.
  echo.
  echo If you think this message is in error, please check
  echo your environment variables to see if "java.exe" and "javac.exe" are
  echo available via JAVA_HOME or PATH.
  echo.
  if defined DOUBLECLICKED pause
  exit /B 1
)


rem We use the value of the JAVA_OPTS environment variable if defined, rather than the config.
set _JAVA_OPTS=%JAVA_OPTS%
if "%_JAVA_OPTS%"=="" set _JAVA_OPTS=%CFG_OPTS%

rem We keep in _JAVA_PARAMS all -J-prefixed and -D-prefixed arguments
rem "-J" is stripped, "-D" is left as is, and everything is appended to JAVA_OPTS
set _JAVA_PARAMS=

:param_beforeloop
if [%1]==[] goto param_afterloop
set _TEST_PARAM=%~1

rem ignore arguments that do not start with '-'
if not "%_TEST_PARAM:~0,1%"=="-" (
  shift
  goto param_beforeloop
)

set _TEST_PARAM=%~1
if "%_TEST_PARAM:~0,2%"=="-J" (
  rem strip -J prefix
  set _TEST_PARAM=%_TEST_PARAM:~2%
)

if "%_TEST_PARAM:~0,2%"=="-D" (
  rem test if this was double-quoted property "-Dprop=42"
  for /F "delims== tokens=1-2" %%G in ("%_TEST_PARAM%") DO (
    if not "%%G" == "%_TEST_PARAM%" (
      rem double quoted: "-Dprop=42" -> -Dprop="42"
      set _JAVA_PARAMS=%%G="%%H"
    ) else if [%2] neq [] (
      rem it was a normal property: -Dprop=42 or -Drop="42"
      set _JAVA_PARAMS=%_TEST_PARAM%=%2
      shift
    )
  )
) else (
  rem a JVM property, we just append it
  set _JAVA_PARAMS=%_TEST_PARAM%
)

:param_loop
shift

if [%1]==[] goto param_afterloop
set _TEST_PARAM=%~1

rem ignore arguments that do not start with '-'
if not "%_TEST_PARAM:~0,1%"=="-" goto param_loop

set _TEST_PARAM=%~1
if "%_TEST_PARAM:~0,2%"=="-J" (
  rem strip -J prefix
  set _TEST_PARAM=%_TEST_PARAM:~2%
)

if "%_TEST_PARAM:~0,2%"=="-D" (
  rem test if this was double-quoted property "-Dprop=42"
  for /F "delims== tokens=1-2" %%G in ("%_TEST_PARAM%") DO (
    if not "%%G" == "%_TEST_PARAM%" (
      rem double quoted: "-Dprop=42" -> -Dprop="42"
      set _JAVA_PARAMS=%_JAVA_PARAMS% %%G="%%H"
    ) else if [%2] neq [] (
      rem it was a normal property: -Dprop=42 or -Drop="42"
      set _JAVA_PARAMS=%_JAVA_PARAMS% %_TEST_PARAM%=%2
      shift
    )
  )
) else (
  rem a JVM property, we just append it
  set _JAVA_PARAMS=%_JAVA_PARAMS% %_TEST_PARAM%
)
goto param_loop
:param_afterloop

set _JAVA_OPTS=%_JAVA_OPTS% %_JAVA_PARAMS%
:run
 
set "APP_CLASSPATH=%APP_LIB_DIR%\ginas.ginas-precisionFDA_PROD-20210906-080902-267dfb7c0.jar;%APP_LIB_DIR%\ginas-evolution.ginas-evolution-precisionFDA_PROD-20210906-080902-267dfb7c0.jar;%APP_LIB_DIR%\ncats.ncats-precisionFDA_PROD-20210906-080902-267dfb7c0.jar;%APP_LIB_DIR%\core.core-precisionFDA_PROD-20210906-080902-267dfb7c0.jar;%APP_LIB_DIR%\build.build-precisionFDA_PROD-20210906-080902-267dfb7c0.jar;%APP_LIB_DIR%\ixdb.ixdb-precisionFDA_PROD-20210906-080902-267dfb7c0.jar;%APP_LIB_DIR%\seqaln.seqaln-precisionFDA_PROD-20210906-080902-267dfb7c0.jar;%APP_LIB_DIR%\structure-indexer-0.0.9-molwitch.jar;%APP_LIB_DIR%\jai_codec.jar;%APP_LIB_DIR%\molwitch-0.6.0.jar;%APP_LIB_DIR%\jni-inchi-0.7-jar-with-dependencies.jar;%APP_LIB_DIR%\molvec-0.9.8-jar-with-dependencies.jar;%APP_LIB_DIR%\molwitch-renderer-1.0.8.jar;%APP_LIB_DIR%\ojdbc6.jar;%APP_LIB_DIR%\molwitch-cdk-1.0.5-SNAPSHOT-jar-with-dependencies.jar;%APP_LIB_DIR%\structure-indexer-0.0.9-molwitch.jar;%APP_LIB_DIR%\jai_codec.jar;%APP_LIB_DIR%\molwitch-0.6.0.jar;%APP_LIB_DIR%\jni-inchi-0.7-jar-with-dependencies.jar;%APP_LIB_DIR%\molvec-0.9.8-jar-with-dependencies.jar;%APP_LIB_DIR%\molwitch-renderer-1.0.8.jar;%APP_LIB_DIR%\ojdbc6.jar;%APP_LIB_DIR%\org.scala-lang.scala-library-2.11.7.jar;%APP_LIB_DIR%\com.typesafe.play.play-java-ws_2.11-2.3.10.jar;%APP_LIB_DIR%\com.typesafe.play.play_2.11-2.3.10.jar;%APP_LIB_DIR%\com.typesafe.play.build-link-2.3.10.jar;%APP_LIB_DIR%\com.typesafe.play.play-exceptions-2.3.10.jar;%APP_LIB_DIR%\com.typesafe.play.play-iteratees_2.11-2.3.10.jar;%APP_LIB_DIR%\org.scala-stm.scala-stm_2.11-0.7.jar;%APP_LIB_DIR%\com.typesafe.config-1.2.1.jar;%APP_LIB_DIR%\com.typesafe.play.play-json_2.11-2.3.10.jar;%APP_LIB_DIR%\com.typesafe.play.play-functional_2.11-2.3.10.jar;%APP_LIB_DIR%\com.typesafe.play.play-datacommons_2.11-2.3.10.jar;%APP_LIB_DIR%\joda-time.joda-time-2.3.jar;%APP_LIB_DIR%\org.joda.joda-convert-1.6.jar;%APP_LIB_DIR%\org.scala-lang.scala-reflect-2.11.1.jar;%APP_LIB_DIR%\com.typesafe.play.twirl-api_2.11-1.0.2.jar;%APP_LIB_DIR%\org.scala-lang.modules.scala-xml_2.11-1.0.1.jar;%APP_LIB_DIR%\org.scala-lang.modules.scala-parser-combinators_2.11-1.0.1.jar;%APP_LIB_DIR%\io.netty.netty-3.9.9.Final.jar;%APP_LIB_DIR%\com.typesafe.netty.netty-http-pipelining-1.1.2.jar;%APP_LIB_DIR%\org.slf4j.jul-to-slf4j-1.7.6.jar;%APP_LIB_DIR%\org.slf4j.jcl-over-slf4j-1.7.6.jar;%APP_LIB_DIR%\ch.qos.logback.logback-core-1.1.1.jar;%APP_LIB_DIR%\ch.qos.logback.logback-classic-1.1.1.jar;%APP_LIB_DIR%\com.typesafe.akka.akka-actor_2.11-2.3.4.jar;%APP_LIB_DIR%\com.typesafe.akka.akka-slf4j_2.11-2.3.4.jar;%APP_LIB_DIR%\xerces.xercesImpl-2.11.0.jar;%APP_LIB_DIR%\xml-apis.xml-apis-1.4.01.jar;%APP_LIB_DIR%\javax.transaction.jta-1.1.jar;%APP_LIB_DIR%\com.typesafe.play.play-ws_2.11-2.3.10.jar;%APP_LIB_DIR%\com.google.guava.guava-16.0.1.jar;%APP_LIB_DIR%\com.ning.async-http-client-1.8.15.jar;%APP_LIB_DIR%\oauth.signpost.signpost-core-1.2.1.2.jar;%APP_LIB_DIR%\oauth.signpost.signpost-commonshttp4-1.2.1.2.jar;%APP_LIB_DIR%\org.apache.httpcomponents.httpcore-4.4.4.jar;%APP_LIB_DIR%\org.apache.httpcomponents.httpclient-4.5.2.jar;%APP_LIB_DIR%\commons-logging.commons-logging-1.2.jar;%APP_LIB_DIR%\com.typesafe.play.play-java_2.11-2.3.10.jar;%APP_LIB_DIR%\org.yaml.snakeyaml-1.13.jar;%APP_LIB_DIR%\org.hibernate.hibernate-validator-5.0.3.Final.jar;%APP_LIB_DIR%\javax.validation.validation-api-1.1.0.Final.jar;%APP_LIB_DIR%\com.fasterxml.classmate-1.0.0.jar;%APP_LIB_DIR%\org.jboss.logging.jboss-logging-3.2.0.Final.jar;%APP_LIB_DIR%\org.springframework.spring-context-4.0.3.RELEASE.jar;%APP_LIB_DIR%\org.springframework.spring-core-4.0.3.RELEASE.jar;%APP_LIB_DIR%\org.springframework.spring-beans-4.0.3.RELEASE.jar;%APP_LIB_DIR%\org.javassist.javassist-3.19.0-GA.jar;%APP_LIB_DIR%\org.reflections.reflections-0.9.8.jar;%APP_LIB_DIR%\javassist.javassist-3.12.1.GA.jar;%APP_LIB_DIR%\dom4j.dom4j-1.6.1.jar;%APP_LIB_DIR%\com.google.code.findbugs.jsr305-2.0.3.jar;%APP_LIB_DIR%\org.apache.tomcat.tomcat-servlet-api-8.0.5.jar;%APP_LIB_DIR%\com.typesafe.play.play-java-jdbc_2.11-2.3.10.jar;%APP_LIB_DIR%\com.typesafe.play.play-jdbc_2.11-2.3.10.jar;%APP_LIB_DIR%\com.jolbox.bonecp-0.8.0.RELEASE.jar;%APP_LIB_DIR%\com.h2database.h2-1.3.175.jar;%APP_LIB_DIR%\tyrex.tyrex-1.0.1.jar;%APP_LIB_DIR%\com.typesafe.play.play-java-ebean_2.11-2.3.10.jar;%APP_LIB_DIR%\org.avaje.ebeanorm.avaje-ebeanorm-3.3.4.jar;%APP_LIB_DIR%\org.avaje.ebeanorm.avaje-ebeanorm-agent-3.2.2.jar;%APP_LIB_DIR%\org.hibernate.javax.persistence.hibernate-jpa-2.0-api-1.0.1.Final.jar;%APP_LIB_DIR%\com.typesafe.play.play-cache_2.11-2.3.10.jar;%APP_LIB_DIR%\net.sf.ehcache.ehcache-core-2.6.8.jar;%APP_LIB_DIR%\com.typesafe.play.filters-helpers_2.11-2.3.10.jar;%APP_LIB_DIR%\org.jcvi.jillion.jillion-5.3.2.jar;%APP_LIB_DIR%\com.google.code.findbugs.annotations-2.0.1.jar;%APP_LIB_DIR%\commons-io.commons-io-2.4.jar;%APP_LIB_DIR%\com.flipkart.zjsonpatch.zjsonpatch-0.4.11.jar;%APP_LIB_DIR%\com.fasterxml.jackson.core.jackson-databind-2.10.3.jar;%APP_LIB_DIR%\com.fasterxml.jackson.core.jackson-annotations-2.10.3.jar;%APP_LIB_DIR%\com.fasterxml.jackson.core.jackson-core-2.10.3.jar;%APP_LIB_DIR%\org.apache.commons.commons-collections4-4.2.jar;%APP_LIB_DIR%\javax.xml.bind.jaxb-api-2.3.0.jar;%APP_LIB_DIR%\com.zaxxer.HikariCP-2.4.6.jar;%APP_LIB_DIR%\org.slf4j.slf4j-api-1.7.16.jar;%APP_LIB_DIR%\com.edulify.play-hikaricp_2.11-2.1.0.jar;%APP_LIB_DIR%\com.googlecode.usc.jdbcdslog-1.0.6.2.jar;%APP_LIB_DIR%\mysql.mysql-connector-java-5.1.31.jar;%APP_LIB_DIR%\org.postgresql.postgresql-9.4-1201-jdbc41.jar;%APP_LIB_DIR%\com.hazelcast.hazelcast-3.5.2.jar;%APP_LIB_DIR%\org.julienrf.play-jsonp-filter_2.11-1.2.jar;%APP_LIB_DIR%\net.sf.jtidy.jtidy-r938.jar;%APP_LIB_DIR%\org.apache.lucene.lucene-core-4.10.0.jar;%APP_LIB_DIR%\org.apache.lucene.lucene-analyzers-common-4.10.0.jar;%APP_LIB_DIR%\org.apache.lucene.lucene-misc-4.10.0.jar;%APP_LIB_DIR%\org.apache.lucene.lucene-highlighter-4.10.0.jar;%APP_LIB_DIR%\org.apache.lucene.lucene-memory-4.10.0.jar;%APP_LIB_DIR%\org.apache.lucene.lucene-queries-4.10.0.jar;%APP_LIB_DIR%\org.apache.lucene.lucene-suggest-4.10.0.jar;%APP_LIB_DIR%\org.apache.lucene.lucene-facet-4.10.0.jar;%APP_LIB_DIR%\org.apache.lucene.lucene-queryparser-4.10.0.jar;%APP_LIB_DIR%\org.apache.lucene.lucene-sandbox-4.10.0.jar;%APP_LIB_DIR%\org.quartz-scheduler.quartz-2.2.1.jar;%APP_LIB_DIR%\c3p0.c3p0-0.9.1.1.jar;%APP_LIB_DIR%\org.webjars.webjars-play_2.11-2.3.0.jar;%APP_LIB_DIR%\org.webjars.requirejs-2.1.15.jar;%APP_LIB_DIR%\org.webjars.webjars-locator-0.14.jar;%APP_LIB_DIR%\org.webjars.bootstrap-3.3.7.jar;%APP_LIB_DIR%\org.webjars.jquery-1.11.1.jar;%APP_LIB_DIR%\org.webjars.typeaheadjs-0.10.5-1.jar;%APP_LIB_DIR%\org.webjars.handlebars-2.0.0-1.jar;%APP_LIB_DIR%\org.webjars.jquery-ui-1.11.2.jar;%APP_LIB_DIR%\org.webjars.jquery-ui-themes-1.11.2.jar;%APP_LIB_DIR%\org.webjars.font-awesome-4.5.0.jar;%APP_LIB_DIR%\org.webjars.html5shiv-3.7.2.jar;%APP_LIB_DIR%\org.webjars.respond-1.4.2.jar;%APP_LIB_DIR%\org.webjars.html2canvas-0.4.1.jar;%APP_LIB_DIR%\colt.colt-1.2.0.jar;%APP_LIB_DIR%\concurrent.concurrent-1.3.4.jar;%APP_LIB_DIR%\org.freehep.freehep-graphicsbase-2.4.jar;%APP_LIB_DIR%\org.freehep.freehep-io-2.2.2.jar;%APP_LIB_DIR%\junit.junit-4.10.jar;%APP_LIB_DIR%\org.hamcrest.hamcrest-core-1.1.jar;%APP_LIB_DIR%\org.freehep.freehep-graphicsio-2.4.jar;%APP_LIB_DIR%\org.freehep.freehep-graphics2d-2.4.jar;%APP_LIB_DIR%\org.freehep.freehep-graphicsio-svg-2.4.jar;%APP_LIB_DIR%\org.freehep.freehep-graphicsio-tests-2.4.jar;%APP_LIB_DIR%\org.webjars.bower.spin.js-2.0.2.jar;%APP_LIB_DIR%\be.objectify.deadbolt-java_2.11-2.3.3.jar;%APP_LIB_DIR%\be.objectify.deadbolt-core_2.11-2.3.3.jar;%APP_LIB_DIR%\com.sleepycat.je-5.0.73.jar;%APP_LIB_DIR%\uk.ac.cam.ch.opsin.opsin-core-2.3.1.jar;%APP_LIB_DIR%\dk.brics.automaton.automaton-1.11-8.jar;%APP_LIB_DIR%\org.codehaus.woodstox.woodstox-core-asl-4.4.1.jar;%APP_LIB_DIR%\javax.xml.stream.stax-api-1.0-2.jar;%APP_LIB_DIR%\org.codehaus.woodstox.stax2-api-3.1.4.jar;%APP_LIB_DIR%\commons-cli.commons-cli-1.3.1.jar;%APP_LIB_DIR%\log4j.log4j-1.2.17.jar;%APP_LIB_DIR%\com.wordnik.swagger-play2_2.11-1.3.12.jar;%APP_LIB_DIR%\com.wordnik.swagger-jaxrs_2.11-1.3.12.jar;%APP_LIB_DIR%\com.wordnik.swagger-core_2.11-1.3.12.jar;%APP_LIB_DIR%\com.fasterxml.jackson.module.jackson-module-scala_2.11-2.4.1.jar;%APP_LIB_DIR%\com.thoughtworks.paranamer.paranamer-2.6.jar;%APP_LIB_DIR%\com.fasterxml.jackson.module.jackson-module-jsonSchema-2.4.1.jar;%APP_LIB_DIR%\com.fasterxml.jackson.jaxrs.jackson-jaxrs-json-provider-2.4.1.jar;%APP_LIB_DIR%\com.fasterxml.jackson.jaxrs.jackson-jaxrs-base-2.4.1.jar;%APP_LIB_DIR%\com.fasterxml.jackson.module.jackson-module-jaxb-annotations-2.4.1.jar;%APP_LIB_DIR%\com.wordnik.swagger-annotations-1.3.12.jar;%APP_LIB_DIR%\org.json4s.json4s-ext_2.11-3.2.11.jar;%APP_LIB_DIR%\org.json4s.json4s-native_2.11-3.2.11.jar;%APP_LIB_DIR%\org.json4s.json4s-core_2.11-3.2.11.jar;%APP_LIB_DIR%\org.json4s.json4s-ast_2.11-3.2.11.jar;%APP_LIB_DIR%\org.scala-lang.scalap-2.11.0.jar;%APP_LIB_DIR%\org.scala-lang.scala-compiler-2.11.0.jar;%APP_LIB_DIR%\org.json4s.json4s-jackson_2.11-3.2.11.jar;%APP_LIB_DIR%\javax.ws.rs.jsr311-api-1.1.1.jar;%APP_LIB_DIR%\org.webjars.swagger-ui-2.1.8-M1.jar;%APP_LIB_DIR%\org.webjars.angularjs-1.5.7.jar;%APP_LIB_DIR%\org.webjars.angular-ui-bootstrap-1.3.3.jar;%APP_LIB_DIR%\org.webjars.dojo-1.10.0.jar;%APP_LIB_DIR%\org.webjars.momentjs-2.11.0.jar;%APP_LIB_DIR%\org.webjars.bower.later-1.2.0.jar;%APP_LIB_DIR%\org.webjars.bower.prettycron-0.10.0.jar;%APP_LIB_DIR%\org.webjars.bower.humanize-duration-3.0.0.jar;%APP_LIB_DIR%\org.webjars.lodash-4.0.0.jar;%APP_LIB_DIR%\org.apache.poi.poi-3.17.jar;%APP_LIB_DIR%\commons-codec.commons-codec-1.10.jar;%APP_LIB_DIR%\org.apache.poi.poi-ooxml-3.17.jar;%APP_LIB_DIR%\org.apache.poi.poi-ooxml-schemas-3.17.jar;%APP_LIB_DIR%\org.apache.xmlbeans.xmlbeans-2.6.0.jar;%APP_LIB_DIR%\stax.stax-api-1.0.1.jar;%APP_LIB_DIR%\com.github.virtuald.curvesapi-1.04.jar;%APP_LIB_DIR%\pl.joegreen.lambda-from-string-1.6.jar;%APP_LIB_DIR%\org.eclipse.jdt.core.compiler.ecj-4.4.2.jar;%APP_LIB_DIR%\org.apache.commons.commons-lang3-3.6.jar;%APP_LIB_DIR%\ginas.ginas-precisionFDA_PROD-20210906-080902-267dfb7c0-assets.jar"
set "APP_MAIN_CLASS=play.core.server.NettyServer"

rem Call the application and pass all arguments unchanged.
"%_JAVACMD%" %_JAVA_OPTS% %GINAS_OPTS% -cp "%APP_CLASSPATH%" %APP_MAIN_CLASS% %*
if ERRORLEVEL 1 goto error
goto end

:error
set ERROR_CODE=1

:end

@endlocal

exit /B %ERROR_CODE%
