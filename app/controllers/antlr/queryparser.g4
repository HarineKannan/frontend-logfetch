grammar queryparser;

query: condition (logicalOperator condition)*;

condition: field comparisonOperator value;

field: 'Activity_ID' | 'Kernel_Time' | 'Process_ID' | 'Processor_ID' | 'Processor_Time' | 'Related_Activity_ID' | 'Thread_ID' | 'channel' | 'computer' | 
'event_id' | 'event_id_qualifiers' | 'eventrecordid' | 'keywords' | 'level' | 'opcode' | 'provider_event_source_name' | 'provider_guid' | 'provider_name' | 'raw_time' | 'session_ID' |  'system_time' | 'task' | 'user_ID' | 'user_Time' | 'version';

comparisonOperator: '=' | '!=';

logicalOperator: 'and' | 'or';

value: STRING ;

IDENTIFIER: [a-zA-Z]+;
STRING: '\'' ~'\''* '\'';
WS: [ \t\r\n]+ -> skip;
NUMBER: [0-9]+;