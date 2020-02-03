export * from '@midwayjs/core';
// 兼容老代码
export {
  Provide as provide,
  Inject as inject,
  Async as async,
  Init as init,
  Destroy as destroy,
  Scope as scope,
  Autowire as autowire,
  Priority as priority,
  Schedule as schedule,
  Config as config,
  Logger as logger,
  Plugin as plugin,
  Controller as controller,
  Session as session,
  Body as body,
  Query as query,
  Param as param,
  Headers as headers,
  File as file,
  Files as files,
  Post as post,
  Get as get,
  Del as del,
  Put as put,
  Patch as patch,
  Options as options,
  Head as head,
  All as all,
  KoaMiddleware,
  KoaMiddlewareParamArray,
  ControllerOption,
  ScheduleOpts
} from '@midwayjs/decorator';
export * from './interface';
export { AgentWorkerLoader, AppWorkerLoader } from './loader/loader';
export { Application, Agent } from './midway';
export { MidwayWebLoader } from './loader/webLoader';

export {
  Context,
  IContextLocals,
  EggEnvType,
  IEggPluginItem,
  EggPlugin,
  PowerPartial,
  EggAppConfig,
  FileStream,
  IApplicationLocals,
  EggApplication,
  EggAppInfo,
  EggHttpClient,
  EggContextHttpClient,
  Request,
  Response,
  Router,
  Service,
  Boot,
  IBoot,
  IgnoreOrMatch,
} from 'egg';
export {
  LoggerLevel as EggLoggerLevel,
  EggLogger,
  EggLoggers,
  EggContextLogger,
} from 'egg-logger';
