-- CreateTable
CREATE TABLE "RocketTeamMember" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "function" TEXT NOT NULL,

    CONSTRAINT "RocketTeamMember_pkey" PRIMARY KEY ("id")
);
