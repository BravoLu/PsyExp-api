js:
	grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./ --grpc_out=grpc_js:./ --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` user_info.proto
go:
	protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --validate_out="lang=go,paths=source_relative:./"  --go-grpc_opt=paths=source_relative ./user_info.proto