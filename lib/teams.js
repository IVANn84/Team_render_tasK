const teams = {
  1: {
    info: {
      name: 'Team Alpha',
      description: 'Description of Team Alpha',
    },
    members: [
      { id: 1, name: 'Alice', role: 'leader' },
      { id: 2, name: 'Bob', role: 'developer' },
    ],
    library: {
      right: ['read', 'write', 'execute'],
      role: ['admin', 'editor', 'viewer'],
    },
  },
  2: {
    info: {
      name: 'Team Beta',
      description: 'Description of Team Beta',
    },
    members: [
      { id: 3, name: 'Charlie', role: 'designer' },
      { id: 4, name: 'Diana', role: 'tester' },
    ],
    library: {
      right: ['read', 'comment'],
      role: ['Editor', 'Viewer'],
    },
  },
};
export const getNameTeams = Object.values(teams).map((team) => team.info);

export const getIdTeams = (id) => {
  const res = Object.fromEntries(
    Object.entries(teams).map(([key, value]) => [key, value.info])
  );

  return res[id];
};

export const getIdMembers = (id) => {
  const res = Object.fromEntries(
    Object.entries(teams).map(([key, value]) => [key, value.members])
  );
  return res[id];
};

export const getIdlibraryRight = (id) => {
  const res = Object.fromEntries(
    Object.entries(teams).map(([key, value]) => [key, value.library])
  );
  return res[id];
};

export const getIdlibraryRole = (id) => {
  const res = Object.fromEntries(
    Object.entries(teams).map(([key, value]) => [key, value.library])
  );
  return res[id];
};

export function getAllTeamsIds() {
  return Object.keys(teams).map((key) => {
    return {
      params: {
        id: key,
      },
    };
  });
}

export function getMembers() {
  const res = Object.values(teams).map(({ member }) => member);
  console.log(res);
}
