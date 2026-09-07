"""create tickets

Revision ID: d28e69773791
Revises:
Create Date: 2026-09-03 07:29:00.945406
"""

from alembic import op
import sqlalchemy as sa
import sqlalchemy_utils
import uuid

# revision identifiers, used by Alembic.
revision = "d28e69773791"
down_revision = None
branch_labels = None
depends_on = None

TICKET_STATUSES = [
    ("open", "Open"),
    ("on hold", "On Hold"),
    ("closed", "Closed"),
]


def upgrade():
    op.create_table(
        "plugin_injectedTickets_tickets",
        sa.Column("title", sa.Text(), nullable=True),
        sa.Column("text", sa.Text(), nullable=True),
        sa.Column(
            "status",
            sqlalchemy_utils.types.choice.ChoiceType(TICKET_STATUSES),
            nullable=False,
            server_default="open",
        ),
        sa.Column(
            "task_id",
            sqlalchemy_utils.types.uuid.UUIDType(binary=False),
            default=uuid.uuid4,
            nullable=True,
        ),
        sa.Column(
            "project_id",
            sqlalchemy_utils.types.uuid.UUIDType(binary=False),
            default=uuid.uuid4,
            nullable=True,
        ),
        sa.Column(
            "episode_id",
            sqlalchemy_utils.types.uuid.UUIDType(binary=False),
            default=uuid.uuid4,
            nullable=True,
        ),
        sa.Column(
            "person_id",
            sqlalchemy_utils.types.uuid.UUIDType(binary=False),
            default=uuid.uuid4,
            nullable=True,
        ),
        sa.Column(
            "assignee_id",
            sqlalchemy_utils.types.uuid.UUIDType(binary=False),
            default=uuid.uuid4,
            nullable=True,
        ),
        sa.Column(
            "id",
            sqlalchemy_utils.types.uuid.UUIDType(binary=False),
            default=uuid.uuid4,
            nullable=False,
        ),
        sa.Column("created_at", sa.DateTime(), nullable=True),
        sa.Column("updated_at", sa.DateTime(), nullable=True),
        sa.ForeignKeyConstraint(["assignee_id"], ["person.id"]),
        sa.ForeignKeyConstraint(["episode_id"], ["entity.id"]),
        sa.ForeignKeyConstraint(["person_id"], ["person.id"]),
        sa.ForeignKeyConstraint(["project_id"], ["project.id"]),
        sa.ForeignKeyConstraint(["task_id"], ["task.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(
        op.f("ix_plugin_injectedTickets_tickets_assignee_id"),
        "plugin_injectedTickets_tickets",
        ["assignee_id"],
        unique=False,
    )
    op.create_index(
        op.f("ix_plugin_injectedTickets_tickets_episode_id"),
        "plugin_injectedTickets_tickets",
        ["episode_id"],
        unique=False,
    )
    op.create_index(
        op.f("ix_plugin_injectedTickets_tickets_person_id"),
        "plugin_injectedTickets_tickets",
        ["person_id"],
        unique=False,
    )
    op.create_index(
        op.f("ix_plugin_injectedTickets_tickets_project_id"),
        "plugin_injectedTickets_tickets",
        ["project_id"],
        unique=False,
    )
    op.create_index(
        op.f("ix_plugin_injectedTickets_tickets_task_id"),
        "plugin_injectedTickets_tickets",
        ["task_id"],
        unique=False,
    )


def downgrade():
    op.drop_index(
        op.f("ix_plugin_injectedTickets_tickets_task_id"),
        table_name="plugin_injectedTickets_tickets",
    )
    op.drop_index(
        op.f("ix_plugin_injectedTickets_tickets_project_id"),
        table_name="plugin_injectedTickets_tickets",
    )
    op.drop_index(
        op.f("ix_plugin_injectedTickets_tickets_person_id"),
        table_name="plugin_injectedTickets_tickets",
    )
    op.drop_index(
        op.f("ix_plugin_injectedTickets_tickets_episode_id"),
        table_name="plugin_injectedTickets_tickets",
    )
    op.drop_index(
        op.f("ix_plugin_injectedTickets_tickets_assignee_id"),
        table_name="plugin_injectedTickets_tickets",
    )
    op.drop_table("plugin_injectedTickets_tickets")
