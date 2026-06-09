import { mysqlTable, mysqlEnum, int, varchar, text, timestamp, datetime } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("open_id", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  loginMethod: varchar("login_method", { length: 100 }),
  lastSignedIn: datetime("last_signed_in"),
  role: varchar("role", { length: 50 }),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const andreaniReports = mysqlTable("andreani_reports", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("user_id").notNull(),
  subject: varchar("subject", { length: 500 }).notNull(),
  priority: mysqlEnum("priority", ["ALTA", "MEDIA", "BASSA"]).notNull(),
  summary: text("summary"),
  sender: varchar("sender", { length: 255 }),
  messageId: varchar("message_id", { length: 255 }),
  receivedAt: datetime("received_at").notNull(),
});

export type InsertAndreaniReport = typeof andreaniReports.$inferInsert;

export const ddtReports = mysqlTable("ddt_reports", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("user_id").notNull(),
  reportType: mysqlEnum("report_type", ["DDT", "TRASFERIMENTO"]).notNull(),
  reportNumber: varchar("report_number", { length: 100 }).notNull(),
  sender: varchar("sender", { length: 255 }),
  recipient: varchar("recipient", { length: 255 }),
  supplier: varchar("supplier", { length: 255 }),
  productCategory: mysqlEnum("product_category", ["iPhone", "iPad", "MacBook", "Apple Watch"]).notNull(),
  quantity: int("quantity"),
  details: text("details"),
  messageId: varchar("message_id", { length: 255 }),
  receivedAt: datetime("received_at").notNull(),
});

export type InsertDdtReport = typeof ddtReports.$inferInsert;

export const invites = mysqlTable("invites", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("user_id").notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  token: varchar("token", { length: 100 }).notNull().unique(),
  expiresAt: datetime("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type InsertInvite = typeof invites.$inferInsert;

export const accesses = mysqlTable("accesses", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("user_id").notNull(),
  ownerId: int("owner_id").notNull(),
  permission: varchar("permission", { length: 100 }).notNull(),
});

export type InsertAccess = typeof accesses.$inferInsert;

export const notifications = mysqlTable("notifications", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("user_id").notNull(),
  title: varchar("title", { length: 500 }).notNull(),
  message: text("message"),
  type: varchar("type", { length: 100 }),
  reportType: varchar("report_type", { length: 50 }),
  isRead: int("is_read").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type InsertNotification = typeof notifications.$inferInsert;
