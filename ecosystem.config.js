module.exports = {
	apps: [
	  {
		name: "bun_server_hono",
		script: "./build/index.js",
		interpreter:"bun",
		// instances: "max",
		watch: false,
		max_memory_restart: "1G",
		// exec_mode: "cluster",
		merge_logs: true,
		log_date_format: "YYYY-MM-DD HH:mm Z",
		out_file: "/opt/logs/pm2/bun_server_hono-out.log",
		error_file: "/opt/logs/pm2/bun_server_hono-error.log",
		env: {
		  NODE_ENV: "production"
		},
		env_qa: {
		  NODE_ENV: "qa"
		},
		env_production: {
		  NODE_ENV: "production"
		}
	  }
	]
  };
  