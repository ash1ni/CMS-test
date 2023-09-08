export PGPASSWORD=password;
cd db;
for file in $(ls); do
	psql -h localhost -U postgres -d test -a -f $file 
done