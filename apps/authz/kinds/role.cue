package kinds

import (
	"github.com/grafana/grafana/apps/authz/kinds/v0alpha1"
)

role: {
	kind:       "Role"
	pluralName: "Roles"
	current:    "v0alpha1"

	codegen: {
		frontend: false
		backend:  true
	}

	versions: {
		"v0alpha1": {
			schema: {
				spec:   v0alpha1.Role
			}
		}
	}
}
