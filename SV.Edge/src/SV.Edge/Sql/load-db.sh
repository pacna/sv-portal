# use for dev and demo purposes
export PGUSER=test
export PGPASSWORD=test
export PGHOST=localhost
export PGDB=sv_portal

psql -U $PGUSER -h $PGHOST -d $PGDB -f schema-down.sql
psql -U $PGUSER -h $PGHOST -d $PGDB -f schema-up.sql